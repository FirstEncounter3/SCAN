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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const makeSearchRequest = async () => {
    setIsLoading(true);
    const response = await getHistograms(accessToken);
    console.log(response);
    setIsLoading(false);
    navigate("/results");
  };

  return (
    <div className="search-form-wrapper">
      <div className="search-from-inputs-and-checkboxes-wrapper">
        {isMobile ? (
          <SearchInputs />
        ) : (
          <>
            <SearchInputs />
            <SearchCheckboxes />
          </>
        )}
      </div>
      <div className="search-form-date-and-submit-wrapper">
        <DateRangePicker />
        <div className="search-button-wrapper">
          <button className="search-button" 
          onClick={makeSearchRequest}
          disabled={isLoading ? true : false}
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
