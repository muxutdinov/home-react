import React, { useContext } from "react";
import { Kino } from "./context";

const Movie = (props) => {
  const [data,setData] = useContext(Kino)
  const onDelete = (e) =>{
     setData((prev)=>prev.filter((value)=>{return value.id!==e}))
  }
  return (
    <div>
      <h1>Name:{props.value.name}</h1>
      <h3>price:{props.value.price}</h3>
      <button onClick={()=>onDelete(props.value.id)}>delete</button>
    </div>
  );
};
export default Movie;
