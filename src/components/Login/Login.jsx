import React from "react";
import "./Login.css";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  return (
    <section className="login-wrapper">
      <div className="login-title">
        <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
      </div>
      <div className="login-image">
        <img src="login.svg" alt="login" />
      </div>
      <LoginForm />
    </section>
  );
};

export default Login;
