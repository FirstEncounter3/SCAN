import React from "react";

import SearchPageResultsTopContent from "../SearchPageResultsTopContent/SearchPageResultsTopContent";
import ResultsSummary from "../ResultsSummary/ResultsSummary";

import "./SearchPageResults.css";

const SearchPageResults = () => {
  return (
    <div className="search-page-results-wrapper">
      <SearchPageResultsTopContent />
      <ResultsSummary />
    </div>
  );
};

export default SearchPageResults;
