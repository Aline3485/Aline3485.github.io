import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./src/app";
import DisplayList from "./src/components/DisplayList";
import EventQuard from "./src/components/EventQuard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components/displaylist" element={<DisplayList />} />
        <Route path="/eventquard/:eventId" element={<EventQuard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
