import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="image-wrapper">
        <img src="footer_left.png" alt="logo" />
      </div>
      <div className="text-wrapper">
        <span>г. Москва, Цветной б-р, 40</span>
        <span>+7 495 771 21 11</span>
        <span>info@skan.ru</span>
        <span className="copyright">Copyright. 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
