import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ background: "skyBlue", padding: 16 }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          whiteSpace: "nowrap",
          listStyleType: "none",
          fontSize: "20px",
        }}
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
