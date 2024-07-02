import React, { useState } from "react";

import "./SearchInputs.css";

import { validateINN, validateDocumentsCount } from "../../utils/validators";

const SearchInputs = ({ onInnChange, onDocumentCountChange, onTonnalityChange }) => {
  const [inn, setInn] = useState("");
  const [innError, setInnError] = useState("");
  const [emptyDocumentsCount, setEmptyDocumentsCount] = useState('');
  const [emptyDocumentsCountError, setEmptyDocumentsCountError] = useState('');

  const handleEmptyDocumentsCountChange = (e) => {
    const { value } = e.target;
    setEmptyDocumentsCount(value);

    const isValid = validateDocumentsCount(value);

    if (!isValid) {
      setEmptyDocumentsCountError('Данное поле не может быть пустым');
    } else {
      setEmptyDocumentsCountError('');
    }
    onDocumentCountChange(value, isValid);
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
    onInnChange(value, isValid);
  };

  const handleTonnalityChange = (e) => {
    const { value } = e.target;
    onTonnalityChange(value);
  };

  return (
    <div className="search-form-inputs">
      <div className="search-input-and-label">
        <label htmlFor="inn">ИНН компании<span className={innError ? "warning-asterisk" : "asterisk"}>*</span></label>
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
        <select id="tonality" name="tonality" onChange={handleTonnalityChange}>
          <option value="any">Любая</option>
          <option value="positive">Позитивная</option>
          <option value="negative">Негативная</option>
        </select>
      </div>
      <div className="search-input-and-label">
        <label htmlFor="documentsCount">Количество документов в выдаче<span className={emptyDocumentsCountError ? "warning-asterisk" : "asterisk"}>*</span></label>
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
