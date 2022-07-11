import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import serveur from "./img/burger.png";
import aVotreSanté from "./img/a-votre-sante.png";
import inscri from "./img/contacter.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="list">
        <Link className="lin" to="/event">
          <img src={concert} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/bar">
          <img src={aVotreSanté} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="lin" to="/restaurants">
          <img src={serveur} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/contact">
          <img src={inscri} alt="" className="icon" />
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
