import Navbar from "../../Nav-Bar/Navbar";
import axios from "axios";
import "./event.css";
import React, { useState, useEffect } from "react";
import DisplayList from "@components/DisplayList";
import DetailsContext from "@components/context/DetailsContext";
import Loupe from "../../assets/img/recherche.png";
import DisplayEvents from "@components/DisplayEvent";

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
      <div className=" eventbody">
        <Navbar />
        <div className="remplissage">
          <div className="search-resultsevent">
            <div className="event-containerevent">
              <input type="text" className="searchevent" />
              <img className="gif" src={Loupe} alt="" />
            </div>
            <div className="event">
              <div className="descriptionevent">
                <DisplayEvents />
                <DetailsContext.Provider value={{ events }}>
                  <DisplayList />
                </DetailsContext.Provider>
              </div>
            </div>
          </div>
          {/* <div className="contenueevent">
          <div className="carteevent">
            <div className="mapevent" />
          </div> */}
          {/* <div className="navigationevent">
            <div className="logo1" />
            <div className="logo2" />
            <div className="logo3" />
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Event;
