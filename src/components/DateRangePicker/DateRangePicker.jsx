import React, { useState } from 'react';

import './DateRangePicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleInputFocus = (e) => {
    e.target.type = "date";
  }

  const handleInputBlur = (e) => {
    e.target.type = "text";
  }

  return (
    <div className="date-range-picker-wrapper">
      <label>Диапазон поиска*</label>
      <div className="date-range-picker">
        <input
          type="text"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="Дата начала     ▼"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <input
          type="text"
          value={endDate}
          onChange={handleEndDateChange}
          placeholder="Дата окончания     ▼"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;