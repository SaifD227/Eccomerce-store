
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully.");
      toast.success("Password reset email sent! Please check your inbox."); 
    } catch (error) {
      console.error("Failed to send password reset email", error);
      toast.error("Failed to send password reset email. Please try again."); 
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(/api-application-programming-interface-concept-260nw-2377219927.webp)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Forgot Password
        </h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <p className="mb-3 text-gray-600 hover:text-blue-600">
          <a href="/Login">Back to Login</a>
        </p>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Reset Password
        </button>
      </form>
      <ToastContainer /> 
    </div>
  );
};

export default ForgotPassword;
