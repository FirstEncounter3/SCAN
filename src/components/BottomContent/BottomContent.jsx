import React from "react";

const BottomContent = () => {
  return (
    <section className="middle-content">
      <div className="text-wrapper">
        <h1>Наши тарифы</h1>
      </div>
      <div className="plan-card-wrapper">
        <div className="beginer">
          <div className="plan-top">
            <h3>Beginner</h3>
            <img src="light.svg" alt="light" />
            <span>Для небольшого исследования</span>
          </div>
        </div>
        <div className="pro"></div>
        <div className="business"></div>
      </div>
    </section>
  );
};

export default BottomContent;
