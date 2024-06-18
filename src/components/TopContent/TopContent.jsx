import React from "react";

import "./TopContent.css";

import { useSearchHandler } from "../../utils/utils";

const TopContent = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const { handleSearchClick } = useSearchHandler();

  return (
    <section className="top-content">
      <div className="info-wrapper">
        <h1>
          сервис по поиску <br></br>публикаций<br></br>о компании<br></br>
          по его ИНН
        </h1>
        <p>
          Комплексный анализ публикаций, получение данных<br></br>в формате PDF
          на электронную почту.
        </p>
        <button
          className="request-button"
          style={{ display: isLogin ? "block" : "none" }}
          onClick={handleSearchClick}
        >
          Запросить данные
        </button>
      </div>
      <div className="img-wrapper">
        <img src="top_content_right.png" alt="top" />
      </div>
    </section>
  );
};

export default TopContent;
