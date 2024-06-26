import React, { useState } from "react";

import "./DateRangePicker.css";

import { validateStartDate, validateEndDate } from "../../utils/validators";

const DateRangePicker = ( { onStartDateChange, onEndDateChange } ) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateError, setDateError] = useState("");

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    const formattedStartDate = newStartDate.split("-").reverse().join(".");

    const dataForApi = new Date(newStartDate)
    const parsedStartDate = dataForApi.toISOString().split('.')[0] + '+03:00';

    const isValid = validateStartDate(formattedStartDate, endDate);

    if (!isValid) {
      setStartDate(formattedStartDate);
      e.target.type = "text";
      e.target.value = formattedStartDate;
      setDateError("Введите корректные данные");
    } else {
      setStartDate(formattedStartDate);
      e.target.type = "text";
      e.target.value = formattedStartDate;
      setDateError("");
    }

    onStartDateChange(parsedStartDate, isValid);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    const formattedEndDate = newEndDate.split("-").reverse().join(".");

    const dataForApi = new Date(newEndDate)
    const parsedEndDate = dataForApi.toISOString().split('.')[0] + '+03:00';
    
    const isValid = validateEndDate(formattedEndDate, startDate);

    if (!isValid) {
      setEndDate(formattedEndDate);
      e.target.type = "text";
      e.target.value = formattedEndDate;
      setDateError("Введите корректные данные");
    } else {
      setEndDate(formattedEndDate);
      e.target.type = "text";
      e.target.value = formattedEndDate;
      setDateError("");
    }

    onEndDateChange(parsedEndDate, isValid);
  };

  const handleInputFocus = (e) => {
    e.target.type = "date";
  };

  const handleInputBlur = (e) => {
    e.target.type = "text";
  };

  return (
    <div className="date-range-picker-wrapper">
      <label>Диапазон поиска*</label>
      <div className="date-range-picker">
        <input
          type="text"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Дата начала      ▼"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className={dateError ? "input-error-date" : ""}
        />
        <input
          type="text"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="Дата окончания      ▼"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className={dateError ? "input-error-date" : ""}
        />
      </div>
      <p className={`p-error-date ${dateError ? "visible" : "hidden"}`}>
        {dateError}
      </p>
    </div>
  );
};

export default DateRangePicker;
