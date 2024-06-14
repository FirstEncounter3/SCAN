import React from "react";

import Rate from "../Rate/Rate";

import "./BottomContent.css";

import { beginner, pro, business } from "../../rates/rates.js";

const BottomContent = () => {
  return (
    <section className="middle-content">
      <div className="text-wrapper">
        <h1>Наши тарифы</h1>
      </div>
      <div className="plan-card-wrapper">
        <Rate
          title={beginner.title} 
          subtitle={beginner.subtitle}
          image={beginner.image}
          smallImage={beginner.smallImage}
          price={beginner.price}
          oldPrice={beginner.oldPrice}
          footnote={beginner.footnote}
          firstAdvantage={beginner.firstAdvantage}
          secondAdvantage={beginner.secondAdvantage}
          thirdAdvantage={beginner.thirdAdvantage}
          color="#FFB64F"
          fontColor="#000000" 
        />
        <Rate
          title={pro.title}
          subtitle={pro.subtitle}
          image={pro.image}
          smallImage={pro.smallImage}
          price={pro.price}
          oldPrice={pro.oldPrice}
          footnote={pro.footnote}
          firstAdvantage={pro.firstAdvantage}
          secondAdvantage={pro.secondAdvantage}
          thirdAdvantage={pro.thirdAdvantage}
          color="#7CE3E1"
          fontColor="#000000" 
        />
        <Rate
          title={business.title} 
          subtitle={business.subtitle}
          image={business.image}
          smallImage={business.smallImage}
          price={business.price}
          oldPrice={business.oldPrice}
          footnote={business.footnote}
          firstAdvantage={business.firstAdvantage}
          secondAdvantage={business.secondAdvantage}
          thirdAdvantage={business.thirdAdvantage}
          color="#000000"
          fontColor="#FFFFFF"
        />
      </div>
    </section>
  );
};

export default BottomContent;
