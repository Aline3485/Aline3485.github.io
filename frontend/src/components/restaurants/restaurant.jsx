import React from "react";
import Navbar from "../../Nav-Bar/navbar";
import "./restaurant.css";
import Video from "../../video/restaurantvideo.mp4";

function Restaurant() {
  const newLocal = (
    <video className="background-video" autoPlay loop muted>
      <source src={Video} type="video/mp4" />
    </video>
  );
  return (
    <div>
      {newLocal}
      <Navbar />
      <div className="titre">
        <h1>À Vos Papilles</h1>
      </div>
      <div className="restaurant">
        <div className="description">
          <p>
            Ici vous trouverez vos restaurants à proximité de vos évènements
            choix pour satisfaire vos papilles avant de vous dépenser sur le
            dancefloor!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
