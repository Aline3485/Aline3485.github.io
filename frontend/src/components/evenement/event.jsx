/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
import React from "react";
import Navbar from "../../Nav-Bar/Navbar";
import "./event.css";

function Event() {
  return (
    <div className=" eventbody">
      <Navbar />
      <div className="remplissage">
        <div className="search-resultsevent">
          <div className="event-containerevent">
            <div className="searchevent" />
          </div>
          <div className="event">
            <div className="descriptionevent"> </div>
            <div className="listevent"> </div>
          </div>
        </div>
        <div className="contenueevent">
          <div className="carteevent">
            <div className="mapevent" />
          </div>
          <div className="navigationevent">
            <div className="logo1" />
            <div className="logo2" />
            <div className="logo3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
