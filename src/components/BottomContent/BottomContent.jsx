import React from "react";

import "./BottomContent.css";

const BottomContent = () => {
  return (
    <section className="middle-content">
      <div className="text-wrapper">
        <h1>Наши тарифы</h1>
      </div>
      <div className="plan-card-wrapper">
        <div className="beginer">
          <div className="plan-top">
            <div className="plan-title">
              <h2>Beginner</h2>
              <p>Для небольшого исследования</p>
            </div>
            <div className="plan-img">
              <img src="beginer.svg" alt="light" />
            </div>
          </div>
          <div className="plan-bottom">
            <div className="price">
              <h2>799 ₽</h2>
              <span>1 200 ₽</span>
            </div>
            <p className="footnote">или 150 ₽/мес. при рассрочке на 24 мес.</p>
            <p className="label-list">В тариф входит:</p>
            <ul>
              <li>
                <div className="check"></div>
                <p>Безлимитная история запросов</p>
              </li>
              <li>
                <div className="check"></div>
                <p>Безопасная сделка</p>
              </li>
              <li>
                <div className="check"></div>
                <p>Поддержка 24/7</p>
              </li>
            </ul>
            <div className="button-plan">
              <button className="request-button">Подробнее</button>
            </div>
          </div>
        </div>
        <div className="pro"></div>
        <div className="business"></div>
      </div>
    </section>
  );
};

export default BottomContent;
