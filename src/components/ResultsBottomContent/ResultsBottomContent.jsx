import React, { useEffect, useState } from "react";

import PublicationCard from "../PublicationCard/PublicationCard";

import { getObjects, getDocuments } from "../../api/api";

import "./ResultsBottomContent.css";

function ResultsBottomContent({ queryParams, accessToken }) {
  const [arrayOfObjects, setArrayOfObjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [encodedIds, setEncodedIds] = useState([]);
  const [encodedIdsLength, setEncodedIdsLength] = useState(0);
  const [shownButtons, setShownButtons] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getObjects(
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
        const data = response.items;
        setEncodedIds(data.map((item) => item.encodedId));
        setEncodedIdsLength(data.length);
        if(data.length <= 10) {
          setShownButtons(false);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [accessToken]);

  const fetchData = async (accessToken, first10Ids) => {
    setIsLoading(true);
    try {
      const response = await getDocuments(accessToken, first10Ids);
      const extractData = response.map((item) => {
        return {
          attributes: item.ok.attributes,
          content: item.ok.content,
          issueDate: item.ok.issueDate,
          title: item.ok.title,
          source: item.ok.source,
          url: item.ok.url,
        };
      });
      setArrayOfObjects((prevObjects) => [...prevObjects, ...extractData]);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (encodedIdsLength > 0 && !fetchingData) {
      setFetchingData(true);
      const first10Ids = encodedIds.slice(0, 10);
      setCurrentIndex(10);
      fetchData(accessToken, first10Ids);
    }
  }, [encodedIds]);

  const loadMorePublications = () => {
    if (currentIndex < encodedIdsLength) {
      const next10Ids = encodedIds.slice(currentIndex, currentIndex + 10);
      setCurrentIndex(currentIndex + 10);
      fetchData(accessToken, next10Ids);
    }
  };

  useEffect(() => {
    if (currentIndex >= encodedIdsLength) {
      setShownButtons(false);
    } else {
      setShownButtons(true);
    }
  }, [currentIndex, encodedIdsLength]);

  return (
    <div className="results-bottom-content-wrapper">
      <div className="header-and-spinner-wrapper">
      <h1>Список документов</h1><span className="loading-spinner" style={{ display: isLoading ? "block" : "none" }}></span>
      </div>
      <div className="publications-grid-wrapper">
        {!isLoading &&
          arrayOfObjects.length > 0 &&
          arrayOfObjects.map((obj, index) => (
            <PublicationCard
              key={index}
              attributes={obj.attributes}
              content={obj.content}
              issueDate={obj.issueDate}
              title={obj.title}
              source={obj.source}
              url={obj.url}
            />
          ))}
      </div>
      <div className="show-more-btn-wrapper">
        <button
          className="show-more-btn"
          onClick={loadMorePublications}
          style={{ display: shownButtons ? "block" : "none", background: isHovered ? "rgba(89, 112, 255, 0.9)" : "rgba(89, 112, 255, 1)"}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Показать еще
        </button>
      </div>
    </div>
  );
}

export default ResultsBottomContent;
