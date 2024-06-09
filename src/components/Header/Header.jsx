import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import RegisterLoginPanel from "../RegisterLoginPanel/RegisterLoginPanel";

const Header = () => {
  return (
    <nav className="header">
      <div className="image-header-wrapper">
        <img src="header_left.png" alt="logo" />
      </div>
      <div className="links-wrapper">
        <Link to="/">Главная</Link>
        <Link to="/about">Тарифы</Link>
        <Link to="/contacts">FAQ</Link>
      </div>
      <RegisterLoginPanel />
    </nav>
  );
};

export default Header;
