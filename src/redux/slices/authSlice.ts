

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  image: string | undefined;
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'), 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items)); 
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.items)); 
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems'); 
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(state.items)); 
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
        localStorage.setItem('cartItems', JSON.stringify(state.items)); 
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
