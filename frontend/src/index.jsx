/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Bar from "./components/bar/bar";
import Event from "./components/evenement/event";
import Restaurant from "./components/restaurants/restaurant";
import Bar from "./components/bar/Bar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/" element={<App />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="" element={} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
