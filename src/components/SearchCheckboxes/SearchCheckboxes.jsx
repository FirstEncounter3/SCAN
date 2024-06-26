import React from "react";

import "./SearchCheckboxes.css";

const SearchCheckboxes = ({ onCheckboxChange }) => {
  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.id
    const isChecked = e.target.checked;

    onCheckboxChange(checkboxId, isChecked)
  }


  return (
    <div className="checkbox-wrapper">
      <div className="checkbox-and-label">
        <input type="checkbox" id="completeness" onChange={handleCheckboxChange}></input>
        <label htmlFor="completeness">Признак максимальной полноты</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="business-context" onChange={handleCheckboxChange}></input>
        <label htmlFor="business-context">Упоминания в бизнес-контексте</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="main-role" onChange={handleCheckboxChange}></input>
        <label htmlFor="main-role">Главная роль в публикации</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="risk-factor" onChange={handleCheckboxChange}></input>
        <label htmlFor="risk-factor">Публикации только с риск-факторами</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="technical-news" onChange={handleCheckboxChange}></input>
        <label htmlFor="technical-news">Включать технические новости рынков</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="announcements" onChange={handleCheckboxChange}></input>
        <label htmlFor="announcements">Включать анонсы и календари</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="summaries" onChange={handleCheckboxChange}></input>
        <label htmlFor="summaries">Включать сводки новостей</label>
      </div>
    </div>
  );
};

export default SearchCheckboxes;
