import React, { useRef, useState } from "react";

import "./ResultsSummaryTable.css";

const ResultsSummaryTable = () => {
  const tbodyRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftHandle = () => {
    if (tbodyRef.current) {
      tbodyRef.current.style.transition = "scroll-left 0.3s ease-in-out";
      tbodyRef.current.scrollLeft = scrollLeft - 96;
      setScrollLeft(tbodyRef.current.scrollLeft);
    }
  };

  const scrollRightHandle = () => {
    if (tbodyRef.current) {
      tbodyRef.current.style.transition = "scroll-left 0.3s ease-in-out";
      tbodyRef.current.scrollLeft = scrollLeft + 96;
      setScrollLeft(tbodyRef.current.scrollLeft);
    }
  };

  return (
    <div className="results-summary-table-wrapper">
      <button className="prev-button" onClick={scrollLeftHandle}></button>
      <div className="summary-table-wrapper" >
        <table className="summary-table">
          <thead>
            <tr>
              <th>Период</th>
              <th>Всего</th>
              <th>Риски</th>
            </tr>
          </thead>
          <tbody ref={tbodyRef} >
            <tr>
              <td>10.09.2021</td>
              <td>5</td>
              <td>0</td>
            </tr>
            <tr>
              <td>17.09.2021</td>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>20.09.2021</td>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <td>23.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>24.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>25.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>26.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>27.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>28.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>29.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>30.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>31.09.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>01.10.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>02.10.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>03.10.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>04.10.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>05.10.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>06.10.2021</td>
              <td>6</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="next-button" onClick={scrollRightHandle}></button>
    </div>
  );
};

export default ResultsSummaryTable;
