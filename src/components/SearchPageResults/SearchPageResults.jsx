import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import SearchPageResultsTopContent from "../SearchPageResultsTopContent/SearchPageResultsTopContent";
import ResultsSummary from "../ResultsSummary/ResultsSummary";
import ResultsBottomContent from "../ResultsBottomContent/ResultsBottomContent";
import Unathorized from "../Unathorized/Unathorized";

import "./SearchPageResults.css";

import { getQueryParams } from "../../utils/utils";

const SearchPageResults = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const accessToken = useSelector((state) => state.user.accessToken);
  const location = useLocation();
  const queryParams = getQueryParams(location);
  
  return isLogin ? (
    <div className="search-page-results-wrapper">
      <SearchPageResultsTopContent />
      <ResultsSummary queryParams={queryParams} accessToken={accessToken} />
      <ResultsBottomContent queryParams={queryParams} accessToken={accessToken}/>
    </div>
  ) : (
    <Unathorized />
  );
};

export default SearchPageResults;
