import Navbar from "../../Nav-Bar/Navbar";
import axios from "axios";
import "./event.css";
import React, { useState, useEffect, useContext } from "react";
import DisplayList from "@components/DisplayList";
import DetailsContext from "@components/context/DetailsContext";
import Search from "@components/Search";
import { FormContext } from "@components/context/FormContext";
import Loupe from "../../assets/img/recherche.png";
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
        console.log("test", data);
        setEvents(data);
      });
  }, []);
  const { form } = useContext(FormContext);
  return (
    <div>
      <div className=" eventbody">
        <Navbar />
        <div className="remplissage">
          <div className="search-resultsevent">
            <div className="event-containerevent">
            <div className="search-resultsevent">
              <Search
                setSearchValue={setSearchValue}
                handleChange={handleChange}
              />
            </div>
            <div className="event">
              <div className="descriptionevent">
                <DisplayEvents />
                <DetailsContext.Provider value={{ events }}>
                  <DisplayList searchValue={searchValue} >
              <input type="text" className="searchevent" />
              <img className="gif" src={Loupe} alt="" />
              </DisplayList>
              </DetailsContext.Provider>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
