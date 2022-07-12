import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Event from "./components/evenement/event";
import Restaurant from "./components/restaurants/restaurant";
import Bar from "./components/bar/Bar";
import Contact from "./components/contact/contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/" element={<App />} />
<<<<<<< HEAD
        <Route path="/restaurants" element={<Restaurant />} />
=======
        <Route path="/restaurants" element={<Restaurants />} />
>>>>>>> 133fa75c70cd834e1b47e46c7713d2e17f514bfc
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
