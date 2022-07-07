import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Event from "./evenement/event";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/evenement/event" element={<Event />} />
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
