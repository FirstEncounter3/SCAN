import React from "react";

import "./SearchCheckboxes.css";

const SearchCheckboxes = () => {
  return (
    <div className="checkbox-wrapper">
      <div className="checkbox-and-label">
        <input type="checkbox" id="completeness"></input>
        <label htmlFor="completeness">Признак максимальной полноты</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="business-context"></input>
        <label htmlFor="business-context">Упоминания в бизнес-контексте</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="main-role"></input>
        <label htmlFor="main-role">Главная роль в публикации</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="risk-factor"></input>
        <label htmlFor="risk-factor">Публикации только с риск-факторами</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="technical-news"></input>
        <label htmlFor="technical-news">Включать технические новости рынков</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="announcements"></input>
        <label htmlFor="announcements">Включать анонсы и календари</label>
      </div>
      <div className="checkbox-and-label">
        <input type="checkbox" id="summaries"></input>
        <label htmlFor="summaries">Включать сводки новостей</label>
      </div>
    </div>
  );
};

export default SearchCheckboxes;
