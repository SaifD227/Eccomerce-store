

import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginData } from "../interfaces/authInterfaces";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/auth/authAction';
// import { UseSelector } from "react-redux";

const Login: React.FC = () => {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Login successful:", userCredential.user);
      toast.success("Login successful!", { position: "top-right" });

      // // Dispatch user data to Redux store with email and password
      // dispatch(loginUser(formData.email, formData.password)); // Include password

      navigate('/home'); 
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error("Login failed", firebaseError.code, firebaseError.message);
      let message = "Login failed. Please try again.";

      if (firebaseError.code === "auth/user-not-found") {
        message = "No user found with this email.";
      } else if (firebaseError.code === "auth/wrong-password") {
        message = "Incorrect password.";
      }

      setErrorMessage(message);
      toast.error(message, { position: "top-right" });
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(/api-application-programming-interface-concept-260nw-2377219927.webp)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Login
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <span className="text-blue-600 hover:underline">
            <a href="/Signup">Register</a>
          </span>
        </p>
        <p className="mt-4 text-right text-blue-600 font-medium hover:underline">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

