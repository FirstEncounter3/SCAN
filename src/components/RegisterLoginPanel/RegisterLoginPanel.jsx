import React from "react";
import { Link } from "react-router-dom";

import "./RegisterLoginPanel.css";

const RegisterLoginPanel = () => {
  return (
    <div className="buttons-wrapper">
      <Link to="/register" className="register-link">
        Зарегистрироваться
      </Link>
      <div className="vertical-line"></div>
      <button className="login-button">Войти</button>
    </div>
  );
};

export default RegisterLoginPanel;
