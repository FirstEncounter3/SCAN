import React, { useRef, useState, useEffect } from "react";

import "./ResultsSummaryTable.css";

import { getHistograms } from "../../api/api";

import ResultsSummaryTableLoader from "../ResultsSummaryTableLoader/ResultsSummaryTableLoader";

const ResultsSummaryTable = ({ numberOfOptions, queryParams, accessToken }) => {
  const tbodyRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getHistograms(
          accessToken, 
          queryParams.startDate, 
          queryParams.endDate, 
          queryParams.documentsCount, 
          queryParams.inn, 
          queryParams.tonality, 
          queryParams.mainRole, 
          queryParams.riskFactors, 
          queryParams.completeness, 
          queryParams.businessContext, 
          queryParams.technicalNews,
          queryParams.announcements,
          queryParams.summaries
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
        setIsLoading(false);
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
