import React from "react";
import { useState } from "react";
import Navbar from "./Nav-Bar/Navbar";


function Contact() {
  const [input, setInput] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thx for submit, see you later!");
  }
  return (
    <div>
    <Navbar />
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">
        Nom :
        <input type="text" value={input} onChange={event => setInput(event.target.value)} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
    </div>);
}
{/* <div class="container">
  <h1>Formulaire de contact</h1>
  <form action="/action_page.php">
    <label for="fname">Nom & prénom</label>
    <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom">

    <label for="sujet">Sujet</label>
    <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message">

    <label for="emailAddress">Email</label>
    <input id="emailAddress" type="email" name="email" placeholder="Votre email">


    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Votre message" style="height:200px"></textarea>

    <input type="submit" value="Envoyer">
  </form>
</div> */}

export default Contact;
