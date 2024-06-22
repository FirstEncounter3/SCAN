import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { validateLogin } from "../../utils/validators";
import { useDispatch } from "react-redux";
import { login } from "../../Store/userSlice";
import { userLogin } from "../../api/api";
import LoginAlternatives from "../LoginAlternatives/LoginAlternatives";

import "./LoginForm.css";

function LoginForm() {
  const [login_value, setLogin] = useState("");
  const [password_value, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isLoginEmpty = login_value === "";
  const isPasswordEmpty = password_value === "";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginChange = (event) => {
    const { value } = event.target;
    setLogin(value);

    if (value.trim() === "") {
      setLoginError("Данное поле не может быть пустым");
    } else {
      const loginValidationResult = validateLogin(value);
      setLoginError(
        loginValidationResult === true ? "" : loginValidationResult
      );
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(event.target.value);

    if (value.trim() === "") {
      setPasswordError("Данное поле не может быть пустым");
    } else {
      setPasswordError("");
    }
  };

  const loginRequestToApi = async () => {
    try {
      const userCredentials = await userLogin(login_value, password_value);
      const accessToken = userCredentials.accessToken;
      const expire = userCredentials.expire;
      dispatch(login({ accessToken, expire }));
      navigate("/");
    } catch (error) {
      console.log(error);
      setPasswordError(error.response.data.message);
    }
  };

  const handleLoginSubmit = async (event) => {
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

    setIsLoading(true);

    try {
      await loginRequestToApi();
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
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
            <p className={`p-error-state ${loginError ? "visible" : "hidden"}`}>
              {loginError}
            </p>
          </div>
          <div className="label-and-input-wrapper">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password_value}
              onChange={handlePasswordChange}
              required={true}
              className={passwordError ? "input-error-state" : ""}
            />
            <p
              className={`p-error-state ${
                passwordError ? "visible" : "hidden"
              }`}
            >
              {passwordError}
            </p>
          </div>
          <div className="login-buttons">
            <button
              onClick={handleLoginSubmit}
              className={isLoginEmpty || isPasswordEmpty ? "inactive" : ""}
              disabled={isLoginEmpty || isPasswordEmpty || isLoading}
            >
              {isLoading ? "Выполняется вход..." : "Войти"}
            </button>
            <Link to="#">Восстановить пароль</Link>
          </div>
        </div>
        <LoginAlternatives />
      </div>
    </div>
  );
}

export default LoginForm;
