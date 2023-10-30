import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

// Import your logo image file
import logo from "./gctlogo.jpg"

export default function Header({ onSidebarToggle }) {
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <button onClick={onSidebarToggle} className="text-gray-500 cursor-pointer hover:text-gray-700">
        <HiOutlineMenu className="text-2xl" />
      </button>
      <div className="flex items-center"> {/* Container for logo and title */}
        <h1 className="text-2xl font-semibold text-gray-700 hidden lg:block">Government College of Technology</h1>
        <img src={logo} alt="College Logo" className="h-10 lg:h-12 ml-2" /> {/* Insert your logo image */}
      </div>
    </div>
  );
}
