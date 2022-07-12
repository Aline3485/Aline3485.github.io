import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Bar from "./components/bar/bar";
import Event from "./components/evenement/event";

import Inscription from "./components/inscription/inscription";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/evenement/event" element={<Event />} />
        <Route path="bars/bar" element={<Bar />} />
        <Route path="/inscriptions/inscription" element={<Inscription />} />
        {/* <Route path="" element={} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
