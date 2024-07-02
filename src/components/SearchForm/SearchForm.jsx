import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const [completeness, setCompleteness] = useState(false);
  const [businessContext, setBusinessContext] = useState(false);
  const [mainRole, setMainrole] = useState(false);
  const [riskFactor, setRiskFactor] = useState(false);
  const [technicalNews, setTechnicalNews] = useState(false);
  const [announcements, setAnnouncements] = useState(false);
  const [summaries, setSummaries] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [isFormStartDateValid, setIsFormStartDateValid] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [isFormEndDateValid, setIsFormEndDateValid] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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

  const handleCheckboxChanged = (checkboxId, checkboxState) => {
    switch (checkboxId) {
      case "completeness":
        setCompleteness(checkboxState);
        break;
      case "business-context":
        setBusinessContext(checkboxState);
        break;
      case "main-role":
        setMainrole(checkboxState);
        break;
      case "risk-factor":
        setRiskFactor(checkboxState);
        break;
      case "technical-news":
        setTechnicalNews(checkboxState);
        break;
      case "announcements":
        setAnnouncements(checkboxState);
        break;
      case "summaries":
        setSummaries(checkboxState);
        break;
        default:
          console.error(`Cehckbox with id ${checkboxId} not found`);
          break;
    }
  };

  const handleStartDateChange = (startValue, validateState) => {
    setStartDate(startValue);
    if (validateState === true) {
      setIsFormStartDateValid(true);
    } else {
      setIsFormStartDateValid(false);
    }
  };
  const handleEndDateChange = (endValue, validateState) => {
    setEndDate(endValue);
    if (validateState === true) {
      setIsFormEndDateValid(true);
    } else {
      setIsFormEndDateValid(false);
    }
  };

  const makeSearchRequest = async () => {
    setIsLoading(true);
    const params = new URLSearchParams();
    params.append("inn", inn);
    params.append("documentsCount", documentsCount);
    params.append("tonality", tonality);
    params.append("completeness", completeness);
    params.append("businessContext", businessContext);
    params.append("mainRole", mainRole);
    params.append("riskFactor", riskFactor);
    params.append("technicalNews", !technicalNews);
    params.append("announcements", !announcements);
    params.append("summaries", !summaries);
    params.append("startDate", startDate);
    params.append("endDate", endDate);

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
            <SearchCheckboxes onCheckboxChange={handleCheckboxChanged}/>
          </>
        )}
      </div>
      <div className="search-form-date-and-submit-wrapper">
        <DateRangePicker onStartDateChange={handleStartDateChange} onEndDateChange={handleEndDateChange}/>
        <div className="search-button-wrapper">
          <button
            className={`search-button ${isFormInnValid && isFormDocumentCountValid && isFormStartDateValid && isFormEndDateValid ? "" : "inactive"}`}
            onClick={makeSearchRequest}
            disabled={isLoading || !isFormInnValid || !isFormDocumentCountValid || !isFormStartDateValid || !isFormEndDateValid}
            style={{background: isHovered ? "rgba(89, 112, 255, 0.9)" : "rgba(89, 112, 255, 1)"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
