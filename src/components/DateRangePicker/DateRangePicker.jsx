import React, { useState } from "react";

import "./DateRangePicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateError, setDateError] = useState("");

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    const formattedStartDate = newStartDate.split("-").reverse().join(".");

    if (formattedStartDate <= endDate || endDate === "") {
      setStartDate(formattedStartDate);
      e.target.type = "text";
      e.target.value = formattedStartDate;
      console.log(formattedStartDate);
      setDateError("");
    } else {
      setStartDate(formattedStartDate);
      e.target.type = "text";
      e.target.value = formattedStartDate;
      setDateError("Введите корректные данные");
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    const formattedEndDate = newEndDate.split("-").reverse().join(".");

    if (formattedEndDate >= startDate || startDate === "") {
      setEndDate(formattedEndDate);
      e.target.type = "text";
      e.target.value = formattedEndDate;
      console.log(formattedEndDate);
      setDateError("");
    } else {
      setEndDate(formattedEndDate);
      e.target.type = "text";
      e.target.value = formattedEndDate;
      setDateError("Введите корректные данные");
    }
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
