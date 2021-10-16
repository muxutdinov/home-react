import React, { useContext } from "react";

const Movie = (props) => {
  return (
    <div>
      <h1>Name:{props.value.name}</h1>
      <h3>price:{props.value.price}</h3>
    </div>
  );
};
export default Movie;
