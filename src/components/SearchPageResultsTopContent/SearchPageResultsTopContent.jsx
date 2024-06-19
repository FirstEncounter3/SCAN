import React from "react";

import "./SearchPageResultsTopContent.css";

const SearchPageResultsTopContent = () => {
  return (
    <div className="search-page-results-top-content-wrapper">
      <div className="top-content-header">
        <h1>Ищем. Скоро будут результаты</h1>
        <p>Поиск может занять некоторое время, просим сохранять терпение.</p>
      </div>
      <div className="top-content-img">
        <img src="result_right.svg" alt="top" />
      </div>
    </div>
  );
};

export default SearchPageResultsTopContent;
