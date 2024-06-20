import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import { validateLogin } from "../../utils/validators";
import { useSelector, useDispatch } from "react-redux";
// import { loginUser } from "../../Store/userSlice";
import { login, logout } from "../../Store/userSlice";

const Login = () => {
  const [login_value, setLogin] = useState("");
  const [password_value, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const isLogin = useSelector((state) => state.user.isLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginChange = (event) => {
    const { value } = event.target;
    setLogin(value);

    if (value.trim() === "") {
      setLoginError("Данное поле не может быть пустым");
    } else {
      const loginValidationResult = validateLogin(value);
      setLoginError(loginValidationResult === true ? "" : loginValidationResult);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isLoginEmpty = login_value === "";
  const isPasswordEmpty = password_value === "";

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (isLoginEmpty || isPasswordEmpty || loginError) {
      setLoginError("Введите корректные данные");
      return;
    }

    const loginError = validateLogin(login_value);
    if (typeof loginError === "string") {
      setLoginError(loginError);
      return;
    }
    dispatch(login());
    navigate("/");
  };

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
                value={login_value}
                onChange={handleLoginChange}
                required={true}
                className={loginError ? "input-error-state" : ""}
              />
              <p className={`p-error-state ${loginError ? "visible" : "hidden"}`}>{loginError}</p>
            </div>
            <div className="label-and-input-wrapper">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                value={password_value}
                onChange={handlePasswordChange}
                required={true}
              />
            </div>
            <div className="login-buttons">
              <button onClick={handleLoginSubmit}
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
