import React from "react";
import Logo from "./img/logoaccueil.png";
import "./Accueil.css";

function Accueil() {
  return (
    <footer>
      <div className="cub">
        <div className="container">
          <div className="container-fluid">
            <img src={Logo} alt="" className="log" />
            <div className="mot">Bienvenue</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Accueil;
