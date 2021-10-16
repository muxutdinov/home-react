import React, { useContext } from "react";
import Movie from "./Movie";
import { Kino } from "./context";
export const MuviList = () => {
  const [data, setData] = useContext(Kino);
  console.log(data,"test");
  return (
    <div>
      {
          data.map((value)=>{
              return(
                  <Movie key={value.id}  value={value} />
              )
          })
      }
    </div>
  );
};
export default MuviList;
