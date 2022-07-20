/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";

const initialState = {
  lastName: "",
  firstName: "",
  email: "",
  nameEvent: "",
  ville: "",
  codePostal: "",
  rue: "",
  numRue: "",
  latitude: "",
  longitude: "",
  price: "",
  nbrVisiteur: "",
  date: "",
  horaire: "",
  description: "",
};
export const SaveContext = createContext({ initialState });
export default function MyResetProvider({ children }) {
  const [save, setSave] = useState(initialState);
  return (
    <SaveContext.Provider value={{ save, setSave }}>
      {children}
    </SaveContext.Provider>
  );
}
