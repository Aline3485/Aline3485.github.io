import React, { useState } from "react";
import Navbar from "../../Nav-Bar/Navbar";
// import Logo from "../../img/logoaccueil.png";
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


      <div className="formContainer">
        <form className="formulaire2" onSubmit={handleSubmit}>
          <label className="formName" htmlFor="name">
            Nom : 
            <input
            className= "inputName"
              type="text"
              value={name}
              placeholder="doe"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="formFirstname" htmlFor="firstname">
            Prénom :
            <input
            className= "inputFirstname"
              type="text"
              value={firstname}
              placeholder="john"
              onChange={(event) => setFirstname(event.target.value)}
            />
          </label>
          <label className="formEmail" htmlFor="email">
            Email :
            <input
            className= "inputEmail"
              type="text"
              value={email}
              placeholder="prenom.nom@email.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          
          <div className="comment" >
        <h3> Commentaires:</h3> 
          <textarea
            className="textarea"
            value={inputs}
            placeholder="vos commentaires"
            onChange={(event) => setInputs(event.target.value)}
          />
          <input className="subButton" type="submit" value="Envoyer" />
          </div>
        </form>
       
      </div>
    </>
  );
}

export default Contact;
