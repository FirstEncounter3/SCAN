import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ResultsSummaryTable.css";

import { getHistograms } from "../../api/api";

import ResultsSummaryTableLoader from "../ResultsSummaryTableLoader/ResultsSummaryTableLoader";

const ResultsSummaryTable = ({ numberOfOptions }) => {
  const tbodyRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
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
  const completeness = query.get("completeness");
  const businessContext = query.get("businessContext");
  const technicalNews = query.get("technicalNews");
  const announcements = query.get("announcements");
  const summaries = query.get("summaries");

  const accessToken = useSelector((state) => state.user.accessToken);
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getHistograms(
          accessToken, 
          startDate, 
          endDate, 
          documentsCount, 
          inn, 
          tonality, 
          mainRole, 
          riskFactors, 
          completeness, 
          businessContext, 
          technicalNews,
          announcements,
          summaries
        );
        const data = response.data;
        console.log('Ответ от сервера', data);
        const totalDocs = data[0];
        console.log('totalDocs', totalDocs);
        const totalRisks = data[1];
        console.log('totalRisks', totalRisks);

        const resultArrayForTable = totalDocs.data.map((doc, index) => {
          const risks = totalRisks.data[index]?.value || 0;
          const date = doc.date.split('T')[0].split('-').reverse().join('.');
          return {
            date: date,
            value: doc.value,
            risks: risks,
          };
        });
        
        console.log(resultArrayForTable);
        setHistogramData(resultArrayForTable);
        numberOfOptions(resultArrayForTable.length);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [accessToken]);

  const scrollLeftHandle = () => {
    if (tbodyRef.current) {
      tbodyRef.current.style.transition = "scroll-left 0.3s ease-in-out";
      tbodyRef.current.scrollLeft = scrollLeft - 96;
      setScrollLeft(tbodyRef.current.scrollLeft);
    }
  };

  const scrollRightHandle = () => {
    if (tbodyRef.current) {
      tbodyRef.current.style.transition = "scroll-left 0.3s ease-in-out";
      tbodyRef.current.scrollLeft = scrollLeft + 96;
      setScrollLeft(tbodyRef.current.scrollLeft);
    }
  };

  return (
    <div className="results-summary-table-wrapper">
      <button className="prev-button" onClick={scrollLeftHandle}></button>
      <div className="summary-table-wrapper" >
        {isLoading ? (
          <ResultsSummaryTableLoader />
        ) : (
          <table className="summary-table">
          <thead>
            <tr>
              <th>Период</th>
              <th>Всего</th>
              <th>Риски</th>
            </tr>
          </thead>
          <tbody ref={tbodyRef} >
              {histogramData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.value}</td>
                  <td>{item.risks}</td>
                </tr>
              ))} 
          </tbody>
        </table>
        )}
      </div>
      <button className="next-button" onClick={scrollRightHandle}></button>
    </div>
  );
};

export default ResultsSummaryTable;
