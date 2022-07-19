import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Event from "./pages/evenement/event";
import Restaurant from "./pages/restaurants/restaurant";
import Bar from "./pages/bar/Bar";
import EventQuard from "@components/EventQuard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/eventquard/:eventId" element={<EventQuard />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/" element={<App />} />
        <Route path="/restaurants" element={<Restaurant />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
