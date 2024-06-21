import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";

import RegisterLoginPanel from "../RegisterLoginPanel/RegisterLoginPanel";
import LogoutPanel from "../LogoutPanel/LogoutPanel";
import RegisterLoginPanelMobile from "../RegisterLoginPanelMobile/RegisterLoginPanelMobile";
import UserInfoBoard from "../UserInfoBoard/UserInfoBoard";

import { useIsMobile } from "../../utils/utils";

const Header = () => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <nav className="header">
      <div className="image-header-wrapper">
        <img src="header_left.png" alt="logo" />
      </div>
      {isLogin ? (
        useIsMobile() ? (
          <>
            <UserInfoBoard />
            <RegisterLoginPanelMobile islogin={isLogin} />
          </>
        ) : (
          <>
            <div className="links-wrapper">
              <Link to="/">Главная</Link>
              <Link to="/about">Тарифы</Link>
              <Link to="/contacts">FAQ</Link>
            </div>
            <UserInfoBoard />
            <LogoutPanel />
          </>
        )
      ) : useIsMobile() ? (
          <RegisterLoginPanelMobile islogin={isLogin}/>
      ) : (
        <>
          <div className="links-wrapper">
            <Link to="/">Главная</Link>
            <Link to="/about">Тарифы</Link>
            <Link to="/contacts">FAQ</Link>
          </div>
          <RegisterLoginPanel />
        </>
      )}
    </nav>
  );
};

export default Header;
