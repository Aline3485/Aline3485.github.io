/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import axios from "axios";

import DisplayList from "./components/DisplayList";
import DetailsContext from "./context/DetailsContext";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&countryCode=FR&locale=*&city=Paris&size=100&apikey=GbGBJquA3zcjVAQzPaqXnz3EWgg1BK9f"
      )
      .then((events) => events.data._embedded.events)

      // Use this data to update the state
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="App">
      <DetailsContext.Provider value={{ events }}>
        <DisplayList />
      </DetailsContext.Provider>
    </div>
  );
}

export default App;
