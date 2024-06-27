import React, { useState } from "react";

import "./ResultsSummary.css";

import ResultsSummaryTable from "../ResultsSummaryTable/ResultsSummaryTable";

const ResultsSummary = () => {
    const [options, setOptions] = useState(0);
  return (
    <div className="results-summary-wrapper">
      <div className="results-summary-header-wrapper">
        <h1>Общая сводка</h1>
        <p>Найдено {options} вариантов</p>
      </div>
      <ResultsSummaryTable numberOfOptions={setOptions} />
    </div>
  );
};

export default ResultsSummary;
