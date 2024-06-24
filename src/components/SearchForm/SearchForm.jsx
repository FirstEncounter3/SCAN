import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchInputs from "../SearchInputs/SearchInputs";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import SearchCheckboxes from "../SearchCheckboxes/SearchCheckboxes";

import "./SearchForm.css";

import { useIsMobile } from "../../utils/utils";
import { getHistograms } from "../../api/api";

const SearchForm = () => {
  const isMobile = useIsMobile();
  const accessToken = useSelector((state) => state.user.accessToken);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [inn, setInn] = useState("");
  const [documentsCount, setDocumentsCount] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInnChange = (innValue) => {
    setInn(innValue);
    setIsFormValid(inn !== "" && documentsCount > "");
  };

  const handleDocumentCountChange = (documentCountValue) => {
    setDocumentsCount(documentCountValue);
    setIsFormValid(inn !== "" && documentsCount > "");
  };

  const makeSearchRequest = async () => {
    setIsLoading(true);
    const response = await getHistograms(accessToken);
    console.log(response);
    setIsLoading(false);

    const params = new URLSearchParams();
    params.append("inn", inn);
    params.append("documentsCount", documentsCount);

    navigate(`/results?${params.toString()}`);
  };

  return (
    <div className="search-form-wrapper">
      <div className="search-from-inputs-and-checkboxes-wrapper">
        {isMobile ? (
          <SearchInputs
            onInnChange={handleInnChange}
            onDocumentCountChange={handleDocumentCountChange}
          />
        ) : (
          <>
            <SearchInputs
              onInnChange={handleInnChange}
              onDocumentCountChange={handleDocumentCountChange}
            />
            <SearchCheckboxes />
          </>
        )}
      </div>
      <div className="search-form-date-and-submit-wrapper">
        <DateRangePicker />
        <div className="search-button-wrapper">
          <button
            className={`search-button ${isFormValid ? "" : "inactive"}`}
            onClick={makeSearchRequest}
            disabled={isLoading || !isFormValid}
          >
            {isLoading ? "Получение данных..." : "Поиск"}
          </button>
          <span>* Обязательные к заполнению поля</span>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
