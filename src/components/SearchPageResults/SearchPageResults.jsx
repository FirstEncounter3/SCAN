import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import SearchPageResultsTopContent from "../SearchPageResultsTopContent/SearchPageResultsTopContent";
import ResultsSummary from "../ResultsSummary/ResultsSummary";
import Unathorized from "../Unathorized/Unathorized";

import "./SearchPageResults.css";

import { getHistograms } from "../../api/api";

const SearchPageResults = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);

  const startDate = query.get("startDate");
  const endDate = query.get("endDate");
  const documentsCount = query.get("documentsCount");
  const inn = query.get("inn");
  const tonality = query.get("tonality");
  const mainRole = query.get("mainRole");
  const riskFactors = query.get("riskFactors");

  const accessToken = useSelector((state) => state.user.accessToken);

  console.log(query);
  console.log(query.get('startDate')); //25.06.2024T00:00:00+03:00

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHistograms(accessToken, startDate, endDate, documentsCount, inn, tonality, mainRole, riskFactors);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // {"data":[{"data":[{"date":"2024-06-01T03:00:00+03:00","value":8398}],"histogramType":"totalDocuments"},{"data":[{"date":"2024-06-01T03:00:00+03:00","value":151}],"histogramType":"riskFactors"}]}
  }, [accessToken]);

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
