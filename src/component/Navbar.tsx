import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const links = [
  { name: "Electronics", path: "/electronics" },
  { name: "Jewellery", path: "/jewellery" },
  { name: "WomenCloth", path: "/women's cloth" },
  { name: "MenCloth", path: "/men's cloth" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
   
    navigate('/Login');
  };

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-white md:hidden">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path} // Use 'to' instead of 'href'
                className="text-white hover:text-gray-300 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sign Out Button */}
      <div className="hover:underline text-white cursor-pointer" onClick={handleSignOut}>
        <p className="text-yellow-600">Sign Out</p>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:hidden">
          <div className="fixed top-0 left-0 w-64 bg-gray-900 h-full p-4 transition-transform transform duration-300">
            <button onClick={toggleSidebar} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-4 space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path} 
                    className="text-white hover:text-gray-300 transition duration-300"
                    onClick={toggleSidebar}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
