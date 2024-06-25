import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchInputs from "../SearchInputs/SearchInputs";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import SearchCheckboxes from "../SearchCheckboxes/SearchCheckboxes";

import "./SearchForm.css";

import { useIsMobile } from "../../utils/utils";

const SearchForm = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [inn, setInn] = useState("");
  const [documentsCount, setDocumentsCount] = useState("");
  const [tonality, setTonnality] = useState("any");
  const [isFormInnValid, setIsFormInnValid] = useState(false);
  const [isFormDocumentCountValid, setIsFormDocumentCountValid] = useState(false);

  const handleInnChange = (innValue, validateState) => {
    setInn(innValue);
    if (validateState === true) {
      setIsFormInnValid(true);
    } else {
      setIsFormInnValid(false);
    }
  };

  const handleDocumentCountChange = (documentCountValue, validateState) => {
    setDocumentsCount(documentCountValue);
    if (validateState === true) {
      setIsFormDocumentCountValid(true);
    } else {
      setIsFormDocumentCountValid(false);
    }
  };

  const handleTonnalityChange = (tonalityValue) => {
    setTonnality(tonalityValue);
  };

  const makeSearchRequest = async () => {
    setIsLoading(true);
    const params = new URLSearchParams();
    params.append("inn", inn);
    params.append("documentsCount", documentsCount);
    params.append("tonality", tonality);

    navigate(`/results?${params.toString()}`);
    setIsLoading(false);
  };

  return (
    <div className="search-form-wrapper">
      <div className="search-from-inputs-and-checkboxes-wrapper">
        {isMobile ? (
          <SearchInputs
            onInnChange={handleInnChange}
            onDocumentCountChange={handleDocumentCountChange}
            onTonnalityChange={handleTonnalityChange}
          />
        ) : (
          <>
            <SearchInputs
              onInnChange={handleInnChange}
              onDocumentCountChange={handleDocumentCountChange}
              onTonnalityChange={handleTonnalityChange}
            />
            <SearchCheckboxes />
          </>
        )}
      </div>
      <div className="search-form-date-and-submit-wrapper">
        <DateRangePicker />
        <div className="search-button-wrapper">
          <button
            className={`search-button ${isFormInnValid && isFormDocumentCountValid ? "" : "inactive"}`}
            onClick={makeSearchRequest}
            disabled={isLoading || !isFormInnValid || !isFormDocumentCountValid}
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
