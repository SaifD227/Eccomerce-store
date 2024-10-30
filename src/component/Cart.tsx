
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/authSlice";
import Topbar from "./Topbar";
import PayPalPaymentModal from "./PayPalPaymentModal";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); 

  const handleProceedToBuy = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
      <Topbar />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 bg-gray-100">
        <div className="flex-grow md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-1/4 h-auto object-cover rounded-lg mb-4 md:mb-0"
                  />
                  <div className="flex flex-col items-start mx-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          dispatch(decrementQuantity({ id: item.id }))
                        }
                        className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition duration-200"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          dispatch(incrementQuantity({ id: item.id }))
                        }
                        className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition duration-200 ml-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 mt-4 md:mt-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => dispatch(clearCart())}
                className="mt-4 bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
        <div className="p-6 bg-white border border-yellow-300 h-40  mt-8 text-center rounded-lg shadow-lg max-w-xs  md:mt-0 md:ml-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Checkout</h2>
          <p className="text-lg text-gray-600 mb-2">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={handleProceedToBuy}
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md transition duration-300"
          >
            Proceed to Buy
          </button>
        </div>
      </div>

      <PayPalPaymentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        totalAmount={totalPrice}
      />
    </>
  );
};

export default Cart;

