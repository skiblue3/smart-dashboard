import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

// Import your logo image file
import logo from './gctlogo.jpg';

export default function Header({ onSidebarToggle, isSidebarVisible }) {
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between w-[100vw]">
      <button onClick={onSidebarToggle} className="text-gray-500 cursor-pointer hover:text-gray-700">
        <HiOutlineMenu className="text-2xl" />
      </button>
      <div className="flex items-center">
        <img src={logo} alt="College Logo" className="h-10 lg:h-12 ml-2 flex-shrink-0" />
        <h1 className={`text-xl lg:text-2xl font-semibold text-gray-700 ml-2 mr-36 pr-[${!isSidebarVisible ? "0px" : "100px"}] lg:block hidden`}>
          Government College of Technology
        </h1>
      </div>
    </div>
  );
}
