import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import Topbar from "../component/Topbar";
import BASE_URL from "../Service/api";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ElectronicsPage = () => {
  const [electronics, setElectronics] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
        (`${BASE_URL}/category/electronics`)
        );
        setElectronics(response.data);
      } catch (error) {
        console.error("Error fetching electronics:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Topbar/>
      <Navbar />
      <h1 className="text-3xl font-bold mt-8 text-center">Electronics Items</h1>
      {loading ? (
        <div className="flex justify-center mt-6">
          <BeatLoader color="#4A90E2" size={15} />
        </div>
      ) : (
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {electronics.map((item) => (
            <a
              href={`/product/${item.id}`}
              key={item.id}
              className="border p-4 rounded-md shadow-md transition-transform duration-200 transform hover:scale-105"
            >
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
          ))}
        </div>
      )}
    </div>
  );
};

export default ElectronicsPage;
