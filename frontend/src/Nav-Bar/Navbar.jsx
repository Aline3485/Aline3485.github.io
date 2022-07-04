import React from "react"
import {Link} from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import serveur from "./img/burger.png";
import a_Votre_Santé from "./img/a-votre-sante.png";
import inscri from "./img/contracter.png";
import "./Navbar.css";



export const Navbar = () => {
    return (
    <nav >
      <ul className="list">
        <Link className="lin" to="./evenement/event"><img src={concert} alt="" className="icon" /></Link>
        <Link className="lin" to="./bar/Bar"><img src={a_Votre_Santé} alt="" className="icon" /></Link>
        <Link className="lin" to="./"><img src={Logo} alt="" className="logo" /></Link>
        <Link className="lin" to="./resto/Resto"><img src={serveur} alt="" className="icon" /></Link>
        <Link className="lin" to="./uber/event"><img src={inscri} alt="" className="icon" /></Link>
      </ul>
    </nav>
  );
}
export default Navbar;

