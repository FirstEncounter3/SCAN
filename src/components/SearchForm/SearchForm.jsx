import React from "react";

import SearchInputs from "../SearchInputs/SearchInputs";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import SearchCheckboxes from "../SearchCheckboxes/SearchCheckboxes";

import "./SearchForm.css";

import { useIsMobile, useSearchResultsHandler } from "../../utils/utils";

const SearchForm = () => {
  const isMobile = useIsMobile();
  const { handleSearchResultsClick } = useSearchResultsHandler();

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
          <button className="search-button" onClick={handleSearchResultsClick}>Поиск</button>
          <span>* Обязательные к заполнению поля</span>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
