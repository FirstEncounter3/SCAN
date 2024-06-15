import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import RegisterLoginPanel from "../RegisterLoginPanel/RegisterLoginPanel";
import LogoutPanel from "../LogoutPanel/LogoutPanel";
import RegisterLoginPanelMobile from "../RegisterLoginPanelMobile/RegisterLoginPanelMobile";

import { useIsMobile } from "../../utils/utils";

const Header = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <nav className="header">
      <div className="image-header-wrapper">
        <img src="header_left.png" alt="logo" />
      </div>
      {useIsMobile() ? ( 
          <RegisterLoginPanelMobile islogin={isLogin}/>
        ) : (
          isLogin ? (
            <>
              <div className="links-wrapper">
                <Link to="/">Главная</Link>
                <Link to="/about">Тарифы</Link>
                <Link to="/contacts">FAQ</Link>
              </div>
              <LogoutPanel />
            </>
          ) : (
            <>
              <div className="links-wrapper">
                <Link to="/">Главная</Link>
                <Link to="/about">Тарифы</Link>
                <Link to="/contacts">FAQ</Link>
              </div>
              <RegisterLoginPanel />
            </>
          )
        )}
      {}
    </nav>
  );
};

export default Header;
