import React, { useState } from "react";
import { useSelector } from "react-redux";

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
  fontColor,
  isCurrentRate,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLogin = useSelector((state) => state.user.isLogin);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cornerImage = useIsMobile ? `${smallImage}` : `${image}`;

  return (
    <div className="plan-card" 
      style={{ border: isHovered ? `2px solid ${color}` : isCurrentRate ? `2px solid ${color}` : `2px solid transparent` }}
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
          <span className="old-price">{oldPrice}</span>
          <span className="rate-badge" 
            style={{display: isCurrentRate && isLogin && !useIsMobile() ? "flex" : "none"}}>
            Текущий тариф
          </span>
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
          <button 
          className="request-button" 
          style={{
            background: isCurrentRate && isLogin ? "rgba(210, 210, 210, 1)" 
            : "rgba(89, 112, 255, 1)",
            color: isCurrentRate && isLogin ? "rgba(0, 0, 0, 1)"
            : "rgba(255, 255, 255, 1)"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            {isCurrentRate && isLogin ? "Перейти в личный кабинет" : "Подробнее"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rate;
