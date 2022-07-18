/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Navbar from "../../Nav-Bar/Navbar";
import "./inscription.css";
import { useContext } from 'react'

function Inscription() {
  const {data, setData} = useState([]);
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [nameEvent, setNameEvent] = useState();
  const [ville, setVille] = useState();
  const [codePostal, setCodePostal] = useState();
  const [rue, setRue] = useState();
  const [numRue, setNumRue] = useState();
  const [price, setPrice] = useState();
  const [nbrVisiteur, setNbrVisiteur] = useState();
  const [date, setDate] = useState();
  const [horaire, setHoraire] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (event) => {
    data.push(
      firstName,
      lastName,
      email,
      nameEvent,
      ville,
      codePostal,
      rue,
      numRue,
      price,
      nbrVisiteur,
      date,
      horaire,
      description,
    );
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Votre formulaire a bien été envoyé !");
    setFirstName("");
    setLastName("");
    setEmail("");
    setNameEvent("");
    setVille("");
    setCodePostal("");
    setRue("");
    setNumRue("");
    setPrice("");
    setNbrVisiteur("");
    setDate("");
    setHoraire("");
    setDescription("");
    console.log(data)
  };

  return (
    <div>
      
      <div className=" barbody">
        <Navbar />
        <div className="entete">Formulaire d'inscription</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formulaire">
          <div className="case">
            <label>Nom</label>
            <input
              className="inputInscription"
              type="text"
              value={lastName}
              name="LastName"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="case">
            <label>Prénom</label>
            <input
              className="inputInscription"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Votre email</label>
            <input
              className="inputInscription"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="case">
            <label>Nom de votre événement</label>
            <input
              className="inputInscription"
              type="text"
              name="eventName"
              value={nameEvent}
              onChange={(event) => setNameEvent(event.target.value)}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Ville</label>
            <input
              className="inputInscription"
              type="text"
              name="ville"
              value={ville}
              onChange={(event) => setVille(event.target.value)}
            />
          </div>
          <div className="case">
            <label>Code postal</label>
            <input
              className="inputInscription"
              type="text"
              name="code"
              value={codePostal}
              onChange={(event) => setCodePostal(event.target.value)}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Rue</label>
            <input
              className="inputInscription"
              type="text"
              name="rue"
              value={rue}
              onChange={(event) => setRue(event.target.value)}
            />
          </div>
          <div className="case">
            <label>Numero de rue</label>
            <input
              className="inputInscription"
              type="text"
              name="numrue"
              value={numRue}
              onChange={(event) => setNumRue(event.target.value)}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Prix</label>
            <input
              className="inputInscription"
              type="text"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="case">
            <label>Nbr de visiteurs Max</label>
            <input
              className="inputInscription"
              type="number"
              value={nbrVisiteur}
              onChange={(event) => setNbrVisiteur(event.target.value)}
            />
          </div>
        </div>
        <div className="formulaire">
          <div className="case">
            <label>Date</label>
            <input
              className="inputInscription"
              type="text"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="case">
            <label>Horaire</label>
            <input
              className="inputInscription"
              type="tet"
              name="horaire"
              value={horaire}
              onChange={(event) => setHoraire(event.target.value)}
            />
          </div>
        </div>
        <div className="case">
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            maxLength={200}
            value={description}
            onChange={(event) => setDescription(event.target.value)}>
          </textarea>
        </div>
        <div className="case">
          <button type="submit" className="btn" >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
