import React from "react";
import { useSelector } from "react-redux";

import SearchPageResultsTopContent from "../SearchPageResultsTopContent/SearchPageResultsTopContent";
import ResultsSummary from "../ResultsSummary/ResultsSummary";
import Unathorized from "../Unathorized/Unathorized";

import "./SearchPageResults.css";

const SearchPageResults = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return isLogin ? (
    <div className="search-page-results-wrapper">
      <SearchPageResultsTopContent />
      <ResultsSummary />
    </div>
  ) : (
    <Unathorized />
  );
};

export default SearchPageResults;
