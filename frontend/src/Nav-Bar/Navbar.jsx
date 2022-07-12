import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import hamburger from "./img/burger.png";
import verre from "./img/verre.png";
import contact from "./img/contacter.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="list">
        <Link className="lin" to="/event">
          <img src={concert} alt="" className="icon" />
        </Link>
        <Link className="lin" to="./bars/bar">
          <img src={verre} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="lin" to="/inscriptions/inscription">
          <img src={hamburger} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/contact">
          <img src={contact} alt="" className="icon" />
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
