import React, { useState, useEffect } from "react";

import "./Carousel.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [numSlides, setNumSlides] = useState(1);

  const slides = [
    <div key="1" className="card-info">
      <img src="time_icon.png"></img>
      <p>
        Высокая и оперативная скорость
        обработки заявки
      </p>
    </div>,
    <div key="2" className="card-info">
      <img src="search_icon.png"></img>
      <p>
        Огромная комплексная база
        данных, обеспечивающая
        объективный ответ на запрос
      </p>
    </div>,
    <div key="3" className="card-info">
      <img src="security_icon.png"></img>
      <p>
        Защита конфеденциальных сведений,
        не подлежащих разглашению по
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNumSlides(3);
      } else {
        setNumSlides(1);
    }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleSlides = slides.slice(index, index + numSlides);

  if (visibleSlides.length < 3 && window.innerWidth > 768) {
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
