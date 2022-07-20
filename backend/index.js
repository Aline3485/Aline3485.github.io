/* eslint-disable prettier/prettier */
require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5008", 10);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});

// A remettre le dans le dossier frontend  !!!!!!!!!!!!!!

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "./src/app";
// import DisplayList from "./src/components/DisplayList";
// import EventQuard from "./src/components/EventQuard";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/components/displaylist" element={<DisplayList />} />
//         <Route path="/eventquard/:eventId" element={<EventQuard />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
