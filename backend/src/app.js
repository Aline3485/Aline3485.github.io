import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayList from "./components/DisplayList";
import "./App.css";

// const sampleMusic = {
//   fields: {
//     title: "Blabla concert",
//     date_description: "dans l'été",
//     address_name: "chez moi",
//     address_street: "toujours chez moi",
//     price_type: "gratosh!!!",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
//   },
// };

function App() {
  const [events, setEvents] = useState([]);
  useEffect (
    () =>  {
      
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=FR&locale=*&city=Paris&segmentName=Music&apikey=GbGBJquA3zcjVAQzPaqXnz3EWgg1BK9f"
      )
      .then((events) => events.data._embedded.events)
      
      // Use this data to update the state
      .then((data) => {
        console.log("test", data);
        setEvents(data);
        
      })}, [])
  
  return (
    <div className="App">
      <>
      
      <DisplayList events={events} />
        
      
      </>
    </div>
  );
}

export default App;
