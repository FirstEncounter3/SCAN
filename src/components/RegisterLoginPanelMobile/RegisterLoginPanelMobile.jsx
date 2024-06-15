import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./RegisterLoginPanelMobile.css";

const RegisterLoginPanelMobile = ({ islogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button
        onClick={toggleMenu}
        className={`menu-toggle ${isOpen ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <img src="header_left_transparent.png" alt="logo" />
        </div>
        <div className="menu-links">
          <Link to="#">Главная</Link>
          <Link to="#">Тарифы</Link>
          <Link to="#">FAQ</Link>
        </div>
        <div className="menu-footer">
          {islogin ? (
            <button>Выйти</button>
          ) : (
            <>
              <Link to="/register">Зарегистрироваться</Link>
              <button>Войти</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterLoginPanelMobile;
