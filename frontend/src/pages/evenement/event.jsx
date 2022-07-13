import React from "react";
import Navbar from "../../Nav-Bar/Navbar";
import DisplayList from "@components/DisplayList";
import EventQuard from "@components/EventQuard";
function Event() {
  return (
    <div>
      <Navbar />
      <div className="listevent">
        <DisplayList />
        <EventQuard />
      </div>
    </div>
  );
}

export default Event;
