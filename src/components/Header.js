import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-5 bg-sky-300">
      <ul
        className="flex justify-around list-none text-2xl font-bold"
      >
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/bestseller">Bestseller</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
