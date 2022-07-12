import "./navbaraccueil.css";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
<<<<<<< HEAD:frontend/src/Nav-Bar/navbaraccueil.jsx
import hamburger from "./img/burger.png";
import verre from "./img/verre.png";
import contact from "./img/contacter.png";
=======
import serveur from "./img/burger.png";
import aVotreSanté from "./img/a-votre-sante.png";
import inscri from "./img/contacter.png";
>>>>>>> 133fa75c70cd834e1b47e46c7713d2e17f514bfc:frontend/src/Navbaraccueuil.jsx

function Navbaraccueil() {
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
<<<<<<< HEAD:frontend/src/Nav-Bar/navbaraccueil.jsx
          <img src={verre} alt="" className="icone" />
        </Link>
        <Link className="link" to="/accueil">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="link" to="/restaurants">
          <img src={hamburger} alt="" className="icone" />
        </Link>
        <Link className="link" to="/contact">
          <img src={contact} alt="" className="icone" />
=======
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
>>>>>>> 133fa75c70cd834e1b47e46c7713d2e17f514bfc:frontend/src/Navbaraccueuil.jsx
        </Link>
      </ul>
    </nav>
  );
}
export default Navbaraccueil;
