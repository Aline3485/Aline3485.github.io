import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { GooglemapContext } from "./context/GooglemapContext";
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./EventQuard.css";
import taxi from "@assets/img/gg.png";
import uber from "@assets/img/uber.png";
import tinder from "@assets/img/tinder.png";

const containerStyle = {
  width: "80vw",
  height: "80vw",
  borderRadius: "20%",
  marginTop: "4vh",
  boxShadow: "0px 0px 227px -66px rgba(0, 0, 0, 0.87) inset",
  border: "solid 2px",
};
function EventQuard() {
  const [details, setDetails] = useState();

  const { eventId } = useParams();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDjwD8enVQ84x6bLN_El_z_J-mp2COZmzM",
  });
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
  const center = {
    lat: Number(details?._embedded.venues[0]?.location.latitude),
    lng: Number(details?._embedded.venues[0]?.location.longitude),
  };

  console.log("center", center);
  // const [map, setMap] = React.useState(null);
  const { map, setMap } = useContext(GooglemapContext);
  const onLoad = (marker) => {
    console.log("marker", marker);
  };

  // eslint-disable-next-line no-unused-vars
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <>
      <div className="bouton">
        <Link className="btnback" to="/event">
          Retour
        </Link>
      </div>
      <div className="EventQuard">
        {details?.images
          .filter((image) => image.height === 576)
          .map((newUrl) => (
            <img key={newUrl.id} src={newUrl.url} alt="" className="picture" />
          ))}
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
        <a className="btnbillet" href={details?.url}>
          site vendeur de billet
        </a>
        <div id="map">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onUnmount={onUnmount}
          >
            <Marker onLoad={onLoad} position={center} />
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </div>
        <div className="navigationevent">
          <img className="logo1" src={taxi} alt="" />
          <img className="logo2" src={uber} alt="" />
          <img className="logo3" src={tinder} alt="" />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default EventQuard;
