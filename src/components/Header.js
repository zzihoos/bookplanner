import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    <header className="border-b-2 bg-[#FFFEFA] overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-6" aria-label="Global">

        <div className="flex items-center">
          <img className="h-24 scale-[2]" src="/bookplanner2.png" alt="logo" />
        </div>
        <div className="flex space-x-14">
          <Link
            to="/about"
            className="text-2xl font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/todo"
            className="text-2xl font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            Todo
          </Link>
          <Link
            to="/calendar"
            className="text-2xl font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            Calendar
          </Link>
          <Link
            to="/bestseller"
            className="text-2xl font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            Bestseller
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
