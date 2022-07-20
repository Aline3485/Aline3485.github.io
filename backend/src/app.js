/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */

const express = require("express");
const path = require("path");
const cors = require("cors");
// const router = require("./router");

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
// app.use(router);

// Redirect all requests to the REACT app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;

// A remettre le dans le dossier frontend  !!!!!!!!!!!!!!

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import DisplayList from "./components/DisplayList";
// import DetailsContext from "./context/DetailsContext";

// function App() {
//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&countryCode=FR&locale=*&city=Paris&size=100&apikey=GbGBJquA3zcjVAQzPaqXnz3EWgg1BK9f"
//       )
//       .then((events) => events.data._embedded.events)

//       // Use this data to update the state
//       .then((data) => {
//         setEvents(data);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <DetailsContext.Provider value={{ events }}>
//         <DisplayList />
//       </DetailsContext.Provider>
//     </div>
//   );
// }

// export default App;
