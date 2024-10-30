

import React, { useState } from "react";
import { auth } from "../firebaseConfig"; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from "react-router-dom"; 
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { SignupData } from "../interfaces/authInterfaces";



const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupData>({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Signup successful:", userCredential.user);
      toast.success("signup successful!", { position: "top-right" });

      navigate('/login'); 
    } catch (error) {
      console.error("Signup failed", error);
      toast.error(`Signup failed: ${error instanceof Error ? error.message : "Unknown error"}`); 
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(/api-application-programming-interface-concept-260nw-2377219927.webp)",
      }}
    >
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Sign Up</h2>
        
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <ToastContainer /> 
    </div>
  );
};

export default Signup;
