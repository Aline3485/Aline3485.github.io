import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import hamburger from "./img/burger.png";
import verre from "./img/verre.png";
import contact from "./img/contacter.png";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav>
      <ul className="list">
        <Link className="lin" to="/event">
          <img src={concert} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/bar">
<<<<<<< HEAD
          <img src={verre} alt="" className="icon" />
=======
          <img src={aVotreSanté} alt="" className="icon" />
>>>>>>> 133fa75c70cd834e1b47e46c7713d2e17f514bfc
        </Link>
        <Link className="lin" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="lin" to="/restaurants">
<<<<<<< HEAD
          <img src={hamburger} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/contact">
          <img src={contact} alt="" className="icon" />
=======
          <img src={serveur} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/contact">
          <img src={inscri} alt="" className="icon" />
>>>>>>> 133fa75c70cd834e1b47e46c7713d2e17f514bfc
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
