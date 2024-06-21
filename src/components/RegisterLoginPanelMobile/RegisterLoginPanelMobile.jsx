import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./RegisterLoginPanelMobile.css";

import { useLoginHandler } from "../../utils/utils";
import { logout } from "../../Store/userSlice";
import { useDispatch } from "react-redux";

const RegisterLoginPanelMobile = ({ islogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { handleLoginClick } = useLoginHandler();

  const handleLoginClickAndCloseMenu = () => {
    handleLoginClick();
    setIsOpen(false);
  };

  const handleLogoutClickAndCloseMenu = () => {
    dispatch(logout());
    setIsOpen(false);
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
          <Link to="/" onClick={toggleMenu}>
            Главная
          </Link>
          <Link to="/contacts" onClick={toggleMenu}>
            Тарифы
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            FAQ
          </Link>
        </div>
        <div className="menu-footer">
          {islogin ? (
            <button onClick={handleLogoutClickAndCloseMenu}>Выйти</button>
          ) : (
            <>
              <Link to="/register" onClick={toggleMenu}>
                Зарегистрироваться
              </Link>
              <button onClick={handleLoginClickAndCloseMenu}>Войти</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterLoginPanelMobile;
