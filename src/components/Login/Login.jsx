import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isLoginEmpty = login === "";
  const isPasswordEmpty = password === "";

  return (
    <section className="login-wrapper">
      <div className="login-title">
        <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
      </div>
      <div className="login-image">
        <img src="login.svg" alt="login" />
      </div>
      <div className="login-form-main-wrapper">
        <img src="padlock.svg" alt="padlock" />
        <div className="login-form-wrapper">
          <div className="switch-form-buttons">
            <button>Войти</button>
            <button>Зарегистрироваться</button>
          </div>
          <div className="inputs-wrapper">
            <div className="label-and-input-wrapper">
              <label htmlFor="login">Логин или номер телефона</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={handleLoginChange}
              />
            </div>
            <div className="label-and-input-wrapper">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="login-buttons">
              <button
                className={isLoginEmpty || isPasswordEmpty ? "inactive" : ""}
                disabled={isLoginEmpty || isPasswordEmpty}
              >
                Войти
              </button>
              <Link to="#">Восстановить пароль</Link>
            </div>
          </div>
          <div className="alternative-login-wrapper">
            <p>Войти через:</p>
            <div className="alternative-login-buttons">
              <button>
                <img src="google.svg" alt="google"></img>
              </button>
              <button>
                <img src="zuckerberg.svg" alt="zuckerberg"></img>
              </button>
              <button>
                <img src="yandex.svg" alt="yeandex"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
