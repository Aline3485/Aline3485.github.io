import React, { useContext, useState } from "react";
import DetailsContext from "@components/context/DetailsContext";
import { Link } from "react-router-dom";
import "./DisplayList.css";


function DisplayList({searchValue}) {
  const { events } = useContext(DetailsContext);
 let eventList =searchValue ? events.filter(event => event.name.toLowerCase().startsWith(searchValue)) : events;
 console.log(searchValue)
  return (
    <div className="DisplayList">
       
      {eventList &&
        eventList
        .map((event) => (
          <div key={event.id}>
            <h1 className="name">{event.name}</h1>
            <Link to={`/eventquard/${event.id}`}>
              {event.images
                .filter((image) => image.height === 115)
                .map((newUrl, idx) => (
                  <img key={idx} src={newUrl.url} alt="" />
                ))
  }
            </Link>
          </div>
        ))
}
    </div>
  );
}

export default DisplayList;
