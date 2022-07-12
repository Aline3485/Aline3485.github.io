import React, { useState } from "react";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "../../Nav-Bar/navbar";
import Logo from "../../img/logoaccueil.png";
import "./contact.css";

function Contact() {
  const [firstname, setFirstname] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [inputs, setInputs] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Thx for submit, see you later!");
    setFirstname("");
    setName("");
    setEmail("");
    setInputs("");
  };

  return (
    <>
      <Navbar />
      <div className="cubeContainer">
        <img className="cube" src={Logo} alt="icone" />
      </div>

      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <label className="formName" htmlFor="name">
            Nom :
            <input
              className="inputContact"
              type="text"
              value={name}
              placeholder="doe"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="formFirstname" htmlFor="firstname">
            Prénom :
            <input
              className="inputContact"
              type="text"
              value={firstname}
              placeholder="john"
              onChange={(event) => setFirstname(event.target.value)}
            />
          </label>
          <label className="formEmail" htmlFor="email">
            Email :
            <input
              className="inputContact"
              type="text"
              value={email}
              placeholder="prenom.nom@email.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          Commentaires:
          <textarea
            className="textareaContact"
            value={inputs}
            placeholder="vos commentaires"
            onChange={(event) => setInputs(event.target.value)}
          />
          <input className="buttonContact" type="submit" value="Envoyer" />
        </form>
      </div>
    </>
  );
}

export default Contact;
