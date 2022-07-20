import React, { useContext } from "react";
import { SaveContext } from "./context/SaveContext";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/img/Logo.png";

function DisplayEvents() {
  const { save } = useContext(SaveContext);

  return (
    <div className="DisplayEvent">
      <h1>{save.nameEvent}</h1>
      <p>{`Organisé par: ${save.lastName}
        ${save.firstName}`}</p>
      <Link to={"/MyEventCard"}>
        <img src={Logo} alt="" className="logo" />
      </Link>
    </div>
  );
}

export default DisplayEvents;
