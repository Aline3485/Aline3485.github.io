/* eslint-disable linebreak-style */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Event from "./pages/evenement/event";
import EventQuard from "./components/EventQuard";
import Inscription from "./pages/inscription/inscription";
import Contact from "./pages/contact/contact";
import MyProvider from "./components/context/FormContext";
import MyMapProvider from "@components/context/GooglemapContext";
import MyEventCard from "@components/MyEventCard";
import MyResetProvider from "@components/context/SaveContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyMapProvider>
      <MyProvider>
        <MyResetProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/event" element={<Event />} />
              <Route path="/eventquard/:eventId" element={<EventQuard />} />
              <Route path="/MyEventCard" element={<MyEventCard />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </MyResetProvider>
      </MyProvider>
    </MyMapProvider>
  </React.StrictMode>
);
