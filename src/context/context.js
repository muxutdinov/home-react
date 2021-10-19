import React, { createContext, useState } from "react";
export const Kino = createContext();

export const KinoProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "Harry Pottor", price: "100$" },
    { id: 2, name: "Harry Keyn", price: "200$" },
    { id: 3, name: "Mr Been", price: "300$" },
    { id: 4, name: "Tom Krus", price: "400$" },
  ]);

  return <Kino.Provider value={[data, setData]}>{children}</Kino.Provider>;
};
