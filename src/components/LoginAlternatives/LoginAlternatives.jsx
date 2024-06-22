import React from "react";

import "./LoginAlternatives.css";

function LoginAlternatives() {
  return (
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
  );
}

export default LoginAlternatives;
