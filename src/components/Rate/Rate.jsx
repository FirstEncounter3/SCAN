import React, { useEffect, useState } from "react";

import "./Rate.css";

import { useIsMobile } from "../../utils/utils";

const Rate = ({
  title,
  subtitle,
  image,
  smallImage,
  price,
  oldPrice,
  footnote,
  firstAdvantage,
  secondAdvantage,
  thirdAdvantage,
  color,
  fontColor
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cornerImage = useIsMobile ? `${smallImage}` : `${image}`;

  return (
    <div className="plan-card" 
      style={{ border: isHovered ? `2px solid ${color}` : `2px solid transparent` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="plan-top" style={{ backgroundColor: color }}>
        <div className="plan-title">
          <h2 style={{ color: fontColor }}>{title}</h2>
          <p style={{ color: fontColor }}>{subtitle}</p>
        </div>
        <div className="plan-img">
          <img src={cornerImage} alt="plan-img" />
        </div>
      </div>
      <div className="plan-bottom">
        <div className="price">
          <h2>{price}</h2>
          <span>{oldPrice}</span>
        </div>
        <p className="footnote">{footnote}</p>
        <p className="label-list">В тариф входит:</p>
        <ul>
          <li>
            <div className="check"></div>
            <p>{firstAdvantage}</p>
          </li>
          <li>
            <div className="check"></div>
            <p>{secondAdvantage}</p>
          </li>
          <li>
            <div className="check"></div>
            <p>{thirdAdvantage}</p>
          </li>
        </ul>
        <div className="button-plan">
          <button className="request-button">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default Rate;
