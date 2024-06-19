import React from "react";

import "./ResultsSummary.css";

import ResultsSummaryTable from "../ResultsSummaryTable/ResultsSummaryTable";

const ResultsSummary = () => {
    const count = 150;
  return (
    <div className="results-summary-wrapper">
      <div className="results-summary-header-wrapper">
        <h1>Общая сводка</h1>
        <p>Найдено {count} вариантов</p>
      </div>
      <ResultsSummaryTable />
    </div>
  );
};

export default ResultsSummary;
