import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event  from "./components/evenement/event";
import Resto from "./components/restaurants/restaurant";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/evenement/event" element={<Event />} />
      {/* <Route path="bars/bar" element={} /> */}
      <Route path="/restaurants/restaurant" element={<Resto />} />
      {/* <Route path="" element={} /> */}
    </Routes>
  </BrowserRouter>

 </React.StrictMode>


);
