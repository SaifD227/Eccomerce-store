

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../interfaces/authInterfaces";

const AllProductPage: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold mt-4 text-center">All Items</h1>
      <ul className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.length > 0 ? (
          items.map((item) => (
            <a href={`/product/${item.id}`} key={item.id} className="border p-4 rounded-md shadow-md">
              <img 
                src={item.image}
                alt={item.title} 
                width={300} 
                height={300} 
                className="w-full h-48 object-cover mb-2 rounded-md" 
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700 truncate">{item.description}</p>
              <p className="text-lg font-bold mt-2">${item.price}</p>
            </a>
          ))
        ) : (
          <li className="text-gray-500">No items available</li>
        )}
      </ul>
    </div>
  );
};

export default AllProductPage;
