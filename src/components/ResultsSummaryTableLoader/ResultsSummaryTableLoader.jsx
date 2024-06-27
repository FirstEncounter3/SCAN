import React from "react";

import "./ResultsSummaryTableLoader.css";

function ResultsSummaryTableLoader() {
  return (
    <div className="table-loader-wrapper">
      <div className="loader-header">
        <p>Период</p>
        <p>Всего</p>
        <p>Риски</p>
      </div>
      <div className="loader-div">
        <span className="loader-table"></span>
        <span className="loader-text">Загружаем данные</span>
      </div>
    </div>
  );
}

export default ResultsSummaryTableLoader;
