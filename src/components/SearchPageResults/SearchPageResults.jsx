import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import SearchPageResultsTopContent from "../SearchPageResultsTopContent/SearchPageResultsTopContent";
import ResultsSummary from "../ResultsSummary/ResultsSummary";
import Unathorized from "../Unathorized/Unathorized";

import "./SearchPageResults.css";

const SearchPageResults = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);

  console.log(query);


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
