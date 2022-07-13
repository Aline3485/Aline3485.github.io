/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventQuard() {
  const [details, setDetails] = useState();
  const { eventId } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?locale=*&id=${eventId}&apikey=GbGBJquA3zcjVAQzPaqXnz3EWgg1BK9f`
      )
      // eslint-disable-next-line no-shadow, no-underscore-dangle
      .then((details) => details.data._embedded.events)

      // Use this data to update the state
      .then((events) => {
        // console.log('try', events);
        setDetails(events[0]);
      });
  }, [eventId]);
  return (
    <div className="EventQuard">
      <h1>{details?.name}</h1>
      <h2>
        Où : {details?._embedded.venues[0].address.line1}{" "}
        {details?._embedded.venues[0].postalCode}{" "}
        {details?._embedded.venues[0].city.name} le{" "}
        {details?.dates.start.localDate} à {details?.dates.start.localTime}
      </h2>
      <p>{details?.description}</p>
      <h3>
        Prix : entre {details?.priceRanges[0].min} et{" "}
        {details?.priceRanges[0].max} {details?.priceRanges[0].currency}
      </h3>
      <a href={details?.url}> Billets </a>
      {details?.images
        .filter((image) => image.height === 683)
        .map((newUrl) => (
          <img key={newUrl.id} src={newUrl.url} alt="" />
        ))}
    </div>
  );
}

export default EventQuard;
