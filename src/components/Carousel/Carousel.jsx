import React, { useState } from "react";

import "./Carousel.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    <div key="1" className="card-info">
      <img src="time_icon.png"></img>
      <p>
        Высокая и оперативная скорость<br></br>
        обработки заявки
      </p>
    </div>,
    <div key="2" className="card-info">
      <img src="search_icon.png"></img>
      <p>
        Огромная комплексная база<br></br>
        данных, обеспечивающая <br></br>
        объективный ответ на запрос
      </p>
    </div>,
    <div key="3" className="card-info">
      <img src="security_icon.png"></img>
      <p>
        Защита конфеденциальных сведений,<br></br>
        не подлежащих разглашению по<br></br>
        федеральному законодательству
      </p>
    </div>,
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const visibleSlides = slides.slice(index, index + 3);

  if (visibleSlides.length < 3) {
    for (let i = 0; i <= 3 - visibleSlides.length; i++) {
      visibleSlides.push(slides[i]);
    }
  }

  return (
    <div className="carousel-wrapper">
      <button onClick={handlePrev} className="prev-button"></button>
      {visibleSlides.map((slide, i) => (
        <div key={i} className="card">
          {slide}
        </div>
      ))}
      <button onClick={handleNext} className="next-button"></button>
    </div>
  );
};

export default Carousel;
