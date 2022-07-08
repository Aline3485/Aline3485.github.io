import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Event from "./evenement/event";
import Contact from "./contact";
import Restaurants from "./resto/Restaurants";
import Bar from "./bar/Bar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/" element={<App />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
