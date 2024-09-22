import React, { useState } from 'react';
import Logo from "../Footer/PrintifyLogo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="{Logo}"
            className="h-14"
          />
          {/* <span className="text-green-600 text-xl font-bold ml-2">Printify</span> */}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger Icon */}
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
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links*/}
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#catalog" className="text-gray-700 hover:text-green-600">Catalog</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-green-600">How it works</a>
          <a href="#pricing" className="text-gray-700 hover:text-green-600">Pricing</a>
          <a href="#blog" className="text-gray-700 hover:text-green-600">Blog</a>
          <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>
          <a href="#use-cases" className="text-gray-700 hover:text-green-600">Use-cases</a>
          <a href="#need-help" className="text-gray-700 hover:text-green-600">Need help?</a>
        </div>

        {/* Login and Sign Up*/}
        <div className={`flex space-x-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <button className="text-gray-700 hover:text-green-600">Log in</button>
          <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>p
        <div className=" py-2 space-y-2">
          <a href="#catalog" className="block text-gray-700 hover:text-green-600">Catalog</a>
          <a href="#how-it-works" className="block text-gray-700 hover:text-green-600">How it works</a>
          <a href="#pricing" className="block text-gray-700 hover:text-green-600">Pricing</a>
          <a href="#blog" className="block text-gray-700 hover:text-green-600">Blog</a>
          <a href="#services" className="block text-gray-700 hover:text-green-600">Services</a>
          <a href="#use-cases" className="block text-gray-700 hover:text-green-600">Use-cases</a>
          <a href="#need-help" className="block text-gray-700 hover:text-green-600">Need help?</a>
          <button className="block w-full text-left text-gray-700 hover:text-green-600">Log in</button>
          <button className="block w-full bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
