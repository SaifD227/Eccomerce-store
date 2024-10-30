export interface LoginData {
    email: string;
    password: string;
}

export interface SignupData {
    email: string;
    password: string;
    name: string;
}

export interface ForgotPasswordData {
    email: string;
}


export    interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }
  


  // interfaces/cartInterfaces.ts
export interface CartItem {
    id: number;        // Assuming this is the product ID
    name: string;      // Product title
    price: number;     // Product price
    quantity: number;  // Quantity of the product
    image: string;     // Product image URL
  }
  