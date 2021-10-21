import React, { useReducer } from "react";

export const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "minus":
        return state - 1;
      case "plus":
        return state + 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={()=>(dispatch({type:'minus'}))}>-</button>
      <h1>{count}</h1>
      <button onClick={()=>(dispatch({type:"plus"}))}>+</button>
    </div>
  );
};
export default Reducer;
