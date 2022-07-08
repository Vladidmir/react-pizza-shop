import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";

import NotFound from "../pages/NotFound";

import "../../scss/style.scss";
export const SortContext = createContext({});

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
