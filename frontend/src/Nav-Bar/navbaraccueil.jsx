import React from "react";
import "./navbaraccueil.css";
import { Link } from "react-router-dom";
import Logo from "@assets/image/Logo.png";
import concert from "@assets/image/concert.png";
import inscription from "@assets/image/ajouter-le-fichier.png";
import contact from "@assets/image/contact.png";

function Navbaraccueil() {
  return (
    <nav className="barnav">
      <ul className="liste">
        <Link className="link" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="link" to="/event">
          <img src={concert} alt="" className="icone" />
        </Link>
        <Link className="link" to="/inscription">
          <img src={inscription} alt="" className="icone" />
        </Link>
        <Link className="link" to="/contact">
          <img src={contact} alt="" className="icone" />
        </Link>
      </ul>
    </nav>
  );
}
export default Navbaraccueil;
