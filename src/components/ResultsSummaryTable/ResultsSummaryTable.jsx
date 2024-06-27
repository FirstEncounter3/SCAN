import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ResultsSummaryTable.css";

import { getHistograms } from "../../api/api";

const ResultsSummaryTable = () => {
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

  useEffect(() => {
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
        setHistogramData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [accessToken]);

  const totalDocs = histogramData[0]
  const totalRisks = histogramData[1]

  const docsData = totalDocs?.data

  console.log("ТОТАЛ", totalDocs)
  console.log(docsData)
  console.log("РИСКИ", totalRisks)

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
        <table className="summary-table">
          <thead>
            <tr>
              <th>Период</th>
              <th>Всего</th>
              <th>Риски</th>
            </tr>
          </thead>
          <tbody ref={tbodyRef} >
            {/* {histogramData.map((dataRow, index) => (
              <tr key={index}>
                {dataRow.map((item) => (
                  <td key={item.period}>{item.count}</td>
                ))}
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
      <button className="next-button" onClick={scrollRightHandle}></button>
    </div>
  );
};

export default ResultsSummaryTable;
