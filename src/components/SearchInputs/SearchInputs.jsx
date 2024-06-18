import React from "react";

import "./SearchInputs.css";

const SearchInputs = () => {
  return (
    <div className="search-form-inputs">
      <label>ИНН компании*</label>
      <input placeholder="10 цифр"></input>
      <label>Тоннальность</label>
      <select id="tonality" name="tonality">
        <option value="any">Любая</option>
        <option value="positive">Позитивная</option>
        <option value="negative">Негативная</option>
      </select>
      <label>Количество документов в выдаче*</label>
      <input placeholder="От 1 до 1000"></input>
    </div>
  );
};

export default SearchInputs;
