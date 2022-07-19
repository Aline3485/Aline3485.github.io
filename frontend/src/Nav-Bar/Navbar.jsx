import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/img/Logo.png";
import concert from "@assets/img/concert.png";
import hamburger from "@assets/img/burger.png";
import verre from "@assets/img/verre.png";
import contact from "@assets/img/contacter.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="list">
        <Link className="lin" to="/event">
          <img src={concert} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/bar">
          <img src={verre} alt="" className="icon" />
        </Link>
        <Link className="lin" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="lin" to="/restaurants">
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
