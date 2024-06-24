import React, { useState } from "react";

import "./SearchInputs.css";

import { validateINN } from "../../utils/validators";

const SearchInputs = ({ onInnChange, onDocumentCountChange }) => {
  const [inn, setInn] = useState("");
  const [innError, setInnError] = useState("");
  const [emptyDocumentsCount, setEmptyDocumentsCount] = useState('');
  const [emptyDocumentsCountError, setEmptyDocumentsCountError] = useState('');

  const handleEmptyDocumentsCountChange = (e) => {
    const { value } = e.target;
    setEmptyDocumentsCount(value);

    const error = '';
    if (value.trim() === "") {
      setEmptyDocumentsCountError("Обязательное поле");
    } 
    else {
      setEmptyDocumentsCountError(error);
    }

    onDocumentCountChange(value);
  };

  const handleInnChange = (e) => {
    const { value } = e.target;
    setInn(value);

    const error = { code: 0, message: "" };
    const isValid = validateINN(value, error);

    if (!isValid) {
      setInnError(error.message);
    } else {
      setInnError("");
    }
    onInnChange(value);
  };

  return (
    <div className="search-form-inputs">
      <div className="search-input-and-label">
        <label htmlFor="inn">ИНН компании*</label>
        <input
          placeholder="10 цифр"
          id="inn"
          value={inn}
          onChange={handleInnChange}
          required={true}
          className={innError ? "input-error-search" : ""}
        ></input>
        <p className={`p-error-search ${innError ? "visible" : "hidden"}`}>
          {innError}
        </p>
      </div>
      <div className="search-input-and-label">
        <label>Тоннальность</label>
        <select id="tonality" name="tonality">
          <option value="any">Любая</option>
          <option value="positive">Позитивная</option>
          <option value="negative">Негативная</option>
        </select>
      </div>
      <div className="search-input-and-label">
        <label htmlFor="documentsCount">Количество документов в выдаче*</label>
        <input
        type="number" 
        placeholder="От 1 до 1000" 
        id="documentsCount"
        value={emptyDocumentsCount}
        onChange={handleEmptyDocumentsCountChange}
        required={true}
        className={emptyDocumentsCountError ? "input-error-search" : ""}>
        </input>
        <p className={`p-error-search ${emptyDocumentsCountError ? "visible" : "hidden"}`}>
          {emptyDocumentsCountError}
        </p>
      </div>
    </div>
  );
};

export default SearchInputs;
