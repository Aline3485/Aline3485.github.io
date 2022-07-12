/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Navbar from "../../Nav-Bar/Navbar";
import "./inscription.css";

function Inscription() {
  return (
    <div>
      <div className=" barbody">
        <Navbar />
        <div className="entete">Formulaire d'inscription</div>
      </div>
      <form>
        <div className="formulaire">
          <div className="case">
            <label>Nom</label>
            <input className="inputInscription" type="text" name="LastName" />
          </div>
          <div className="case">
            <label>Prénom</label>
            <input className="inputInscription" type="text" name="firstName" />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Votre email</label>
            <input className="inputInscription" type="email" />
          </div>
          <div className="case">
            <label>Nom de votre événement</label>
            <input className="inputInscription" type="text" name="eventName" />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Ville</label>
            <input className="inputInscription" type="text" name="pseudo" />
          </div>
          <div className="case">
            <label>Code postal</label>
            <input className="inputInscription" type="text" name="pseudo" />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Rue</label>
            <input className="inputInscription" type="text" name="pseudo" />
          </div>
          <div className="case">
            <label>Numero de rue</label>
            <input className="inputInscription" type="text" name="pseudo" />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Prix</label>
            <input className="inputInscription" type="text" name="pseudo" />
          </div>
          <div className="case">
            <label>Nbr de visiteurs Max</label>
            <input className="inputInscription" type="number" />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Date</label>
            <input className="inputInscription" type="text" name="LastName" />
          </div>
          <div className="case">
            <label>Horaire</label>
            <input className="inputInscription" type="tet" name="LastName" />
          </div>
        </div>
        <div className="case">
          <label>Description</label>
          <textarea name="description" id="description" maxLength={200}>
            Maxi 200 caractères
          </textarea>
        </div>
        <div className="case">
          <button type="submit" className="btn">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
