/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import Navbar from "../../Nav-Bar/Navbar";
import axios from "axios";
import "./event.css";
import React, { useState, useEffect, useContext } from "react";
import DisplayList from "@components/DisplayList";
import DetailsContext from "@components/context/DetailsContext";
import Search from "@components/Search";
import { FormContext } from "@components/context/FormContext";
import Loupe from "@assets/image/recherche.png";
import DisplayEvents from "@components/DisplayEvent";

function Event() {
  const [events, setEvents] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log("searchVlue", searchValue);
  function handleChange() {
    searchValue(searchValue);
  }
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
  const { form } = useContext(FormContext);
  return (
    <div>
      <div className=" eventbody">
        <Navbar />
        <div className="remplissage">
          <h1 className="titreevent">ÉVÉNEMENTS</h1>
          <div className="search-resultsevent">
              <Search  
                setSearchValue={setSearchValue}
                handleChange={handleChange}
              />
            <div className="event">
              <div className="descriptionevent">
                <DisplayEvents />
                <DetailsContext.Provider value={{ events }}>
                  <DisplayList searchValue={searchValue} >
              </DisplayList>
              </DetailsContext.Provider>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    
  );
}

export default Event;
