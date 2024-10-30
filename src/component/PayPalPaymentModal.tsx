


import React, { useState } from "react";

interface PayPalPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number; 
}

const PayPalPaymentModal: React.FC<PayPalPaymentModalProps> = ({
  isOpen,
  onClose,
  totalAmount,
}) => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  if (!isOpen) return null; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Payment processed for amount:", totalAmount, formData);
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Pay with PayPal</h2>
        <p className="mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>
        <form onSubmit={handlePayment}>
       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Card Name
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="John Doe"
                required
              />
            </label>
          </div>

      
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Card Number
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="1234 5678 9012 3456"
                required
              />
            </label>
          </div>

       
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Expiration Date (MM/YY)
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="MM/YY"
                required
              />
            </label>
          </div>

     
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              CVV
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="123"
                required
              />
            </label>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            <a href="/successfully">Pay Now</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayPalPaymentModal;
