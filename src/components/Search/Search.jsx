import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import Unathorized from "../Unathorized/Unathorized";

import "./Search.css";

import { useIsMobile } from "../../utils/utils";
import { useSelector } from "react-redux";

const Search = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);
  const isMobile = useIsMobile();

  return isLogin ? (
    <section className="search-wrapper">
      <div className="header-wrapper">
        <div className="header-text-wrapper">
          <h1>Найдите необходимые данные в пару кликов.</h1>
          <p>
            Задайте параметры поиска. Чем больше заполните, тем точнее поиск
          </p>
        </div>
        <div className="header-images-wrapper">
          {isMobile ? (
            <img src="document.svg" alt="document" />
          ) : (
            <>
              <img src="document.svg" alt="document" />
              <img src="folders.svg" alt="folders" />
            </>
          )}
        </div>
      </div>
      <div className="search-form-wrapper-and-logo">
        <SearchForm />
        <img src="vector_search_form.svg" alt="logo" />
      </div>
    </section>
  ) : (
    <Unathorized />
  );
};

export default Search;
