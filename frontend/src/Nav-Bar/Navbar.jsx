import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/img/Logo.png";
import concert from "@assets/img/concert.png";
import inscription from "@assets/img/ajouter-le-fichier.png";
import contact from "@assets/img/contact.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbarcontainer">
    <nav>
      <ul className="list">
      <Link className="lin" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="lin" to="/event">
          <img src={concert} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/inscription">
          <img src={inscription} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/contact">
          <img src={contact} alt="" className="icon" />
        </Link>
      </ul>
    </nav>
    </div>
  );
}
export default Navbar;
