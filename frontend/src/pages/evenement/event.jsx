import Navbar from "../../Nav-Bar/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayList from "@components/DisplayList";
import DetailsContext from "@components/context/DetailsContext";
// import EventQuard from "@components/EventQuard";

function Event() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&countryCode=FR&locale=*&city=Paris&size=100&apikey=GbGBJquA3zcjVAQzPaqXnz3EWgg1BK9f"
      )
      .then((events) => events.data._embedded.events)

      // Use this data to update the state
      .then((data) => {
        console.log("test", data);
        setEvents(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <DetailsContext.Provider value={{ events }}>
        <div className="listevent">
          <DisplayList />
        </div>
      </DetailsContext.Provider>
    </div>
  );
}

export default Event;
