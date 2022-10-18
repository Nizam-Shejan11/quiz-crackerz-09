import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="text-info">
        Quiz<span style={{ color: "orange" }}>Game</span>
      </h1>
      <div className="header-nav text-bold">
        <Link to="/">Topic</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  );
};

export default Header;
