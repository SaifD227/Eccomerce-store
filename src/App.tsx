import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ForgotPassword from "./component/ForgotPassword";
import Home from "./component/Home";
import AllProductPage from "./component/AllProductPage";
import ProductDetailPage from "./component/ProductDetailPage";
import Cart from "./component/Cart";
import ElectronicsPage from "./pages/Electronics";
import JewelryPage from "./pages/JewelryPage";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import Successfully from "./component/Successfully";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/jewellery" element={<JewelryPage />} />
        <Route path="/women's cloth" element={<WomenPage/>} />
        <Route path="/men's cloth" element={<MenPage />} />
        <Route path="/successfully" element={<Successfully />} />
       
      </Routes>
    </Router>
  );
};

export default App;
