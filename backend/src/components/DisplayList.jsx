import React, { useContext } from "react";
import DetailsContext from "../context/DetailsContext";
import { Link } from "react-router-dom";

function DisplayList() {
  const {events} = useContext(DetailsContext)
  return (
    <div className="DisplayList">
      {events &&
        events.map((event) => (
          <div key={event.id}>
            <h1>{event.name}</h1>
            <Link to={`/eventquard/${event.id}`}>
              {event.images
                .filter((image) => image.height === 115)
                .map((newUrl, idx) => (
                  <img key={idx} src={newUrl.url} alt="" />
                ))}
            </Link>

           </div>

        ))}
    </div>
  );
}

export default DisplayList;