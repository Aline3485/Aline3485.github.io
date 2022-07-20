/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";


export const GooglemapContext = createContext();

export default function MyMapProvider({ children }) {
    const [map, setMap] = useState(null);
    return (
      <GooglemapContext.Provider value={{ map, setMap }}>
        {children}
      </GooglemapContext.Provider>
    );
  }
