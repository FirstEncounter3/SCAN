import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Login from "../Login/Login";
import Stub from "../Stub/Stub";

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Stub />} />
        <Route path="/contacts" element={<Stub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Stub />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
