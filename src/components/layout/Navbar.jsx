import React from "react";
import { RiSunFill } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-6 py-4">
      <div className="text-xl sm:text-2xl font-bold text-white ">
        ⛅Weather App
      </div>

      <button className="p-2 rounded-lg hover:bg-gray-800 text-xl sm:text-2xl">
        <RiSunFill />
      </button>
    </nav>
  );
}

export default Navbar;