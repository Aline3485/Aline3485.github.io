/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GooglemapContext } from "./context/GooglemapContext";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { SaveContext } from "./context/SaveContext";

// Taille de la Google map
const containerStyle = {
  width: "400px",
  height: "400px",
};

function MyEventCard() {
  const { map, setMap } = useContext(GooglemapContext);
  const { save } = useContext(SaveContext);
  console.log("r", save);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDjwD8enVQ84x6bLN_El_z_J-mp2COZmzM",
  });
  //Google map API
  const center = {
    lat: Number(`${save.latitude}`),
    lng: Number(`${save.longitude}`),
  };
  const onLoad = (marker) => {
    console.log("marker", marker);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <>
      <Link to={"/event"}>Back </Link>
      <div className="CreateEventCard">
        <h1>{save.nameEvent}</h1>
        <h2>
          {`Où: ${save.numRue} ${save.rue} ${save.ville} ${save.codePostal} le ${save.date} à ${save.horaire}`}
        </h2>
        <p>{save.description}</p>
        <h3>Prix : {save.price}</h3>
        <h3>{`Capacité max: ${save.nbrVisiteur} personnes`}</h3>
        <h3>Contact: {save.email}</h3>
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
      </div>
    </>
  ) : (
    <></>
  );
}

export default MyEventCard;
