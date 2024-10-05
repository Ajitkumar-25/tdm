import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <FiSearch className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-64 sm:w-80 md:w-96 p-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <FiBell size={24} className="text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </div>

        <FaQuestionCircle size={24} className="text-gray-600" />

        <div className="border-l h-8 border-gray-300 mx-4 hidden md:block"></div>

        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden md:text-right md:block">
            <p className="font-semibold">Admin Name</p>
            <p className="text-gray-500 text-sm">Staff</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
