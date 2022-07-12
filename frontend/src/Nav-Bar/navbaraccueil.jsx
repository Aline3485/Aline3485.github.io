import React from 'react';
import './navbaraccueil.css';
import { Link } from 'react-router-dom';
import Logo from './Logo.jpg';
import concert from './img/concert.png';
import hamburger from './img/burger.png';
import verre from './img/verre.png';
import contact from './img/contacter.png';

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
        </Link>
      </ul>
    </nav>
  );
}
export default Navbaraccueil;
