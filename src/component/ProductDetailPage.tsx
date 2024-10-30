import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Product, CartItem } from "../interfaces/authInterfaces";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/authSlice";
import Topbar from "./Topbar";
import { ClipLoader } from "react-spinners";
import Navbar from "./Navbar";

const ProductDetailPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
      };
      dispatch(addToCart(cartItem));
      navigate("/cart");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <p className="text-center mt-40">
        <ClipLoader />
      </p>
    );

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg flex">
          <img
            src={product.image}
            alt={product.title}
            className="w-1/3 h-auto object-cover rounded-l-lg p-4"
          />
          <div className="p-6 w-2/3 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              {product.title}
            </h1>
            <p className="text-lg text-gray-700 mb-4 text-center">
              {product.description}
            </p>
            <p className="text-2xl font-semibold text-blue-600 mb-4 text-center">
              ${product.price}
            </p>
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
