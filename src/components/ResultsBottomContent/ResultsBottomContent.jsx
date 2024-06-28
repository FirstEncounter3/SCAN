import React, { useEffect, useState } from "react";

import PublicationCard from "../PublicationCard/PublicationCard";

import { getObjects, getDocuments } from "../../api/api";

function ResultsBottomContent({ queryParams, accessToken }) {
  const [encodedIds, setEncodedIds] = useState([]);
  const [popEncodedIds, setPopEncodedIds] = useState([]);
  const [arrayOfObjects, setArrayOfObjects] = useState([]);
  const [IDsSuccessfullyReceived, setIDsSuccessfullyReceived] = useState(false);
  const [popArraySuccessfullyReceived, setPopArraySuccessfullyReceived] = useState(false);
  const [shownButtons, setShownButtons] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
        console.log("Полученный список encodedIds", data);
        setIDsSuccessfullyReceived(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [accessToken]);

  useEffect(() => {
    const firstPop = () => {
      if (IDsSuccessfullyReceived) {
        const newShownPublications = encodedIds.splice(0, 10);
        setPopEncodedIds(newShownPublications);
        setPopArraySuccessfullyReceived(true);
        if (encodedIds.length === 0) {
          setShownButtons(false);
        }
      }
    } ;
    firstPop();
  }, [IDsSuccessfullyReceived]);

  const loadMorePublications = () => {
    if (IDsSuccessfullyReceived) {
      const newShownPublications = encodedIds.splice(0, 10);
        setPopEncodedIds(newShownPublications);
        setPopArraySuccessfullyReceived(true);

        if (encodedIds.length === 0) {
          setShownButtons(false);
        }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (popArraySuccessfullyReceived) {
          const response = await getDocuments(
            accessToken,
            popEncodedIds
          );
          console.log(response);
          setPopArraySuccessfullyReceived(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [accessToken, popArraySuccessfullyReceived]);

  return (
    <div className="results-bottom-content-wrapper">
      <h1>Список документов</h1>
      <PublicationCard />
      <button onClick={loadMorePublications} style={{ display: shownButtons ? "block" : "none" }}>Показать еще</button>
    </div>
  );
}

export default ResultsBottomContent;
