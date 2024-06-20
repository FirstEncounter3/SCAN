import React from "react";
import { logout } from "../../Store/userSlice";
import { useDispatch } from "react-redux";

import "./LogoutPanel.css";

const LogoutPanel = () => {

  const dispatch = useDispatch();

  return (
    <div className="logout-wrapper">
      <div className="user-info">
        <h3>Алексей А.</h3>
        <button onClick={() => dispatch(logout())}>Выйти</button>
      </div>
      <div className="img-user-wrapper">
        <img src="user.png"></img>
      </div>
    </div>
  );
};

export default LogoutPanel;
