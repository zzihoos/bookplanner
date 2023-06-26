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
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/calendar">calendar</Link>
        </li>
        <li>
          <Link to="/bestseller">bestseller</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
