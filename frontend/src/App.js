import React from "react"
import { BrowserRouter, Router } from "react-router-dom";
import Accueil from "./Accueil";
import "./App.css";
import Navbaraccueuil from "./Navbaraccueuil";
import Video from "./video/Projet2.mp4";


function App() {
  return (
    <div className="App">
  <video className="background-video"autoPlay={true} loop muted={true}>

<source src={Video} type="video/mp4" />

</video>
  <Navbaraccueuil />
  <Accueil />
    </div>
  
  );
}

export default App;
