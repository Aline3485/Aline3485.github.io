import "./Navbaraccueuil.css";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import hamburger from "./img/burger.png";
import verre from "./img/verre.png";
import contact from "./img/contacter.png";

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
        <Link className="link" to="./evenement/event">
          <img src={concert} alt="" className="icone" />
        </Link>
        <Link className="link" to="./evenement/event">
          <img src={verre} alt="" className="icone" />
        </Link>
        <Link className="link" to="./">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <Link className="link" to="./restaurants/restaurant">
          <img src={hamburger} alt="" className="icone" />
        </Link>
        <Link className="link" to="./evenement/event">
          <img src={contact} alt="" className="icone" />
        </Link>
      </ul>
    </nav>
  );
}
export default Navbaraccueuil;
