import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../assets/image/GodrejLogobg.png'

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="flex flex-col items-center py-4 text-black">
      <div className="flex justify-center">
        <img src={Logo} alt="Logo" className="h-16" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 mt-4 w-full px-4">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Hair Color</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <p className="hidden md:inline">|</p>
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <FaSearch 
            className="cursor-pointer text-black" 
            onClick={toggleSearchBar} 
          />
          {searchVisible && (
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md bg-white text-black"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
