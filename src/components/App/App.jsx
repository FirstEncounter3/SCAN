import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>

      <Routes>
        <Route path="/"  />
        <Route path="/about"/>
        <Route path="/contacts" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
