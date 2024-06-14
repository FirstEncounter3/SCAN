import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import RegisterLoginPanel from "../RegisterLoginPanel/RegisterLoginPanel";
import LogoutPanel from "../LogoutPanel/LogoutPanel";

import { useIsMobile } from "../../utils/utils";

const Header = () => {
  const [isLogin, setIsLogin] = React.useState(true);

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
      {/* НЕ СОВСЕМ РАБОЧИЙ ТАК, КАК ОЖИДАЕТСЯ, УЧАСТОК */}
      {useIsMobile() ? (
        isLogin? (
          <LogoutPanel />
         ) : ( 
          <RegisterLoginPanel />
         )
        ) : (
          isLogin ? <div>mobileLogout</div> : <div>mobileLogin</div>
        )}
    </nav>
  );
};

export default Header;
