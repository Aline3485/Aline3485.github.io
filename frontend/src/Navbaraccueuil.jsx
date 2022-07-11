// import React, { useState, useEffect } from "react";
import "./Navbaraccueuil.css";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import serveur from "./img/burger.png";
import aVotreSanté from "./img/a-votre-sante.png";
import inscri from "./img/contacter.png";

function Navbaraccueuil() {
  return (
    <nav className="barnav">
      {/* <ul className="liste">
                        <li className='items' >🎤</li>
                        <li className='items'>🍻</li>
                         <img className="logo" src={Logo} alt=""/>
                        <li className='items'>🍔</li>
                        <li className='items'>🚖</li>
                </ul> */}
      <ul className="liste">
        <Link className="link" to="/event">
          <img src={concert} alt="" className="icone" />
        </Link>
        <Link className="link" to="/bar">
          <img src={aVotreSanté} alt="" className="icone" />
        </Link>
        <Link className="link" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="link" to="/restaurants">
          <img src={serveur} alt="" className="icone" />
        </Link>
        <Link className="link" to="/contact">
          <img src={inscri} alt="" className="icone" />
        </Link>
      </ul>
    </nav>
  );
}
export default Navbaraccueuil;
