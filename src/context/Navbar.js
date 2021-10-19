import React, { useContext } from "react";
import { Kino } from "./context";

export const Navbar = () => {
  const [data, setData] = useContext(Kino);
  return (
    <div>
      <h1>MovieList</h1>
      <h1>{data.length}</h1>
      <hr />
    </div>
  );
};
export default Navbar;
