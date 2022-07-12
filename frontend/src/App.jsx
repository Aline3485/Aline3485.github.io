import React from "react";
import Accueil from "./Accueil";
import "./App.css";
// eslint-disable-next-line import/no-unresolved
import Navbaraccueil from "./Nav-bar/navbaraccueil";
import Video from "./video/Projet2.mp4";

function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <Navbaraccueil />
      <Accueil />
    </div>
  );
}
// autoPlay={true} loop muted={true}   code original qui ressort en erreur

export default App;
