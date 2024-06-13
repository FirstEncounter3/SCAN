import React from "react";

import Rate from "../Rate/Rate";

import "./BottomContent.css";

const BottomContent = () => {
  return (
    <section className="middle-content">
      <div className="text-wrapper">
        <h1>Наши тарифы</h1>
      </div>
      <div className="plan-card-wrapper">
        <Rate title="Beginner" subtitle="Для небольшого исследования" />
        <Rate />
        <div className="pro"></div>
        <div className="business"></div>
      </div>
    </section>
  );
};

export default BottomContent;
