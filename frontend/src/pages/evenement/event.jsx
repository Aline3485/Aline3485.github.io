import React from "react";
import Navbar from "../../Nav-Bar/Navbar";
import DisplayList from "@components/DisplayList";
import EventQuard from "@components/EventQuard";
import data from "@pages/evenement/event"
function Event() {
  return (
    <div>
      <Navbar />
      <div className="listevent">
        <DisplayList />
        <EventQuard />
        <div>{data.firstName}</div>
      </div>
    </div>
  );
}

export default Event;
