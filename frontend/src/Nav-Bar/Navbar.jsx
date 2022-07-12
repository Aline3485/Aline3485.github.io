import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
// eslint-disable-next-line import/no-unresolved
import inscription from "./img/ajouter-le-fichier.png";
import food from "./img/food.png";
import contact from "./img/contacter.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="list">
        <Link className="lin" to="/event">
          <img src={concert} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/bar">
          <img src={food} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="lin" to="/inscription">
          <img src={inscription} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/contact">
          <img src={contact} alt="" className="icon" />
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
