import React, { useContext } from "react";
import { SaveContext } from "./context/SaveContext";
import { Link } from "react-router-dom";
import Logo from "@assets/image/Logo.png";

function DisplayEvents() {
  const { save } = useContext(SaveContext);

  return (
    <div className="DisplayEvent">
      <h1 className="name">{save.nameEvent}</h1>
      <p className="organise">{`Organisé par: ${save.lastName}
        ${save.firstName}`}</p>
      <Link to={"/MyEventCard"}>
        <img src={Logo} alt="" className="logo" />
      </Link>
    </div>
  );
}

export default DisplayEvents;
