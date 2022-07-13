import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/img/Logo.jpg";
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
