import React from "react";
import { Link } from "react-router-dom";

import "./RegisterLoginPanel.css";

import { useLoginHandler } from "../../utils/utils";
const RegisterLoginPanel = () => {

  const { handleLoginClick } = useLoginHandler();

  return (
    <div className="buttons-wrapper">
      <Link to="/register" className="register-link">
        Зарегистрироваться
      </Link>
      <div className="vertical-line"></div>
      <button className="login-button" onClick={handleLoginClick}>Войти</button>
    </div>
  );
};

export default RegisterLoginPanel;
