

// import { useState, ChangeEvent, FormEvent } from "react";
// import { CiSearch, CiHeart } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa";
// import { BsCartCheck } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { PiShoppingCartSimple } from "react-icons/pi";

// const links = [
//   { name: "Electronics", path: "/electronics" },
//   { name: "Jewellery", path: "/jewellery" },
//   { name: "WomenCloth", path: "/women's cloth" },
//   { name: "MenCloth", path: "/men's cloth" },
// ];

// const Topbar: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const navigate = useNavigate();
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const cart = useSelector((state: any) => state.cart.items || []); 

//   const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const foundLink = links.find(
//       (link) => link.name.toLowerCase() === searchTerm.toLowerCase()
//     );
//     if (foundLink) {
//       navigate(foundLink.path); 
//     } else {
//       alert("No results found");
//     }
//   };

//   return (
//     <div className="flex justify-between items-center bg-orange-600 shadow-md h-24 px-4 md:px-8 lg:px-16">
//       <div className="flex-shrink-0">
//         <div className="flex items-center">
//           <BsCartCheck className="text-6xl text-green-500" />
//           <h1 className="text-2xl text-white font-serif">Ecommerce Store</h1>
//         </div>
//       </div>
//       <div className="flex items-center flex-grow  mx-4">
//         <form
//           onSubmit={handleSearchSubmit}
//           className="flex items-center border border-orange-500 rounded-md bg-white shadow-sm w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300"
//         >
//           <div className="bg-orange-200 p-4 rounded-l-md">
//             <CiSearch className="text-gray-600" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search Branded Product"
//             className="py-3 w-full focus:outline-none rounded-r-md"
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </form>
//       </div>
//       <div className="flex items-center space-x-6">
//         <div className="flex items-center text-4xl text-white transition-colors duration-200 cursor-pointer">
//           <FaRegUser />
//         </div>
//         <div className="flex items-center text-4xl text-white transition-colors duration-200 cursor-pointer">
//           <CiHeart />
//         </div>
//         <p className="cursor-pointer relative flex items-center">
//           <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
//             {cart.length}
//           </span>
//           <PiShoppingCartSimple size={40} className="text-white" />
      
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Topbar;





import { useState, ChangeEvent, FormEvent } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCartSimple } from "react-icons/pi";

const links = [
  { name: "Electronics", path: "/electronics" },
  { name: "Jewellery", path: "/jewellery" },
  { name: "WomenCloth", path: "/women's cloth" },
  { name: "MenCloth", path: "/men's cloth" },
];

const Topbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cart = useSelector((state: any) => state.cart.items || []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundLink = links.find(
      (link) => link.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundLink) {
      navigate(foundLink.path);
    } else {
      alert("No results found");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-orange-600 shadow-md h-auto px-4 md:px-8 lg:px-16 py-4">
      <div className="flex-shrink-0 flex items-center mb-4 md:mb-0">
        <BsCartCheck className="text-6xl text-green-500" />
        <h1 className="text-2xl text-white font-serif ml-2"><a href="/home">Ecommerce Store</a></h1>
      </div>
      <div className="flex items-center flex-grow mx-4">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center border border-orange-500 rounded-md bg-white shadow-sm w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300"
        >
          <div className="bg-orange-200 p-4 rounded-l-md">
            <CiSearch className="text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Search Branded Product"
            className="py-3 w-full focus:outline-none rounded-r-md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        <div className="flex items-center text-4xl text-white transition-colors duration-200 cursor-pointer">
          <FaRegUser />
        </div>
        <div className="flex items-center text-4xl text-white transition-colors duration-200 cursor-pointer">
          <CiHeart />
        </div>
        <p className="cursor-pointer relative flex items-center">
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
            {cart.length}
          </span>
          <PiShoppingCartSimple size={40} className="text-white" />
        </p>
      </div>
    </div>
  );
};

export default Topbar;

