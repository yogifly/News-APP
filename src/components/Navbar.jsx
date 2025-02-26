import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["general", "sports", "technology", "business", "health", "entertainment", "science"];

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">News 24/7</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategory(category)}
              className="px-4 py-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 mt-2 rounded-lg">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setCategory(category);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-blue-600 rounded-lg transition"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
