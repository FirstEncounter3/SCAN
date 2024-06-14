import React from "react";
import { Link } from "react-router-dom";

import "./LogoutPanel.css";

const LogoutPanel = () => {
  return (
    <div className="logout-wrapper">
      <div className="user-info">
        <h3>Алексей А.</h3>
        <Link to="/logout">Выйти</Link>
      </div>
      <div className="img-user-wrapper">
        <img src="user.png"></img>
      </div>
    </div>
  );
};

export default LogoutPanel;
