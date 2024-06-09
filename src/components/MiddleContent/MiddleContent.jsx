import React from "react";

import Carousel from "../Carousel/Carousel";

import "./MiddleContent.css";

const MiddleContent = () => {
  return (
    <section className="middle-content">
      <div className="text-wrapper">
        <h1>Почему именно мы</h1>
      </div>
      <Carousel />
    </section>
  );
};

export default MiddleContent;
