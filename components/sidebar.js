import React from "react";

const Sidebar = ({ setContent }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="h-16 flex items-center justify-center font-bold text-xl">
        Bharat TDM
      </div>
      <nav className="flex-1 px-2 space-y-1">
        <button
          onClick={() => setContent("Dashboard")}
          className="block py-2.5 px-4 rounded hover:bg-gray-700 w-full text-left"
        >
          Dashboard
        </button>
        <button
          onClick={() => setContent("Doctor List")}
          className="block py-2.5 px-4 rounded hover:bg-gray-700 w-full text-left"
        >
          Doctor List
        </button>
        <button
          onClick={() => setContent("TDM Management")}
          className="block py-2.5 px-4 rounded hover:bg-gray-700 w-full text-left"
        >
          TDM Management
        </button>
        <button
          onClick={() => setContent("Homecare Services")}
          className="block py-2.5 px-4 rounded hover:bg-gray-700 w-full text-left"
        >
          Homecare Services
        </button>
        <button
          onClick={() => setContent("Revenue Management")}
          className="block py-2.5 px-4 rounded hover:bg-gray-700 w-full text-left"
        >
          Revenue Management
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
