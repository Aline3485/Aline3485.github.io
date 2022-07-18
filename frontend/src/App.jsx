import React  from "react";
import Accueil from "./pages/accueil/Accueil";
import "./App.css";
import Navbaraccueil from "./Nav-Bar/navbaraccueil";
import Video from "@assets/video/Projet2.mp4";
import DetailsContext from "@components/context/DetailsContext";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  return (
    <DetailsContext.Provider value={{ events, setEvents }} >
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <Navbaraccueil />
      <Accueil />
      
    </div>
    </DetailsContext.Provider>
  );
}
// autoPlay={true} loop muted={true}   code original qui ressort en erreur

export default App;
