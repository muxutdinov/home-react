import React, { useState, useReducer } from "react";
import { Todo } from "./Todo";
export const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];
      case "toggle":
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo
        });
        case 'delete':
          return state.filter((todo)=>todo.id!==action.payload.id)
      default:
        return state;
    }
  };
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);
  const hanleSubmit = () => {
    if (name.length !== 0) {
      dispatch({ type: "add", payload: { name: name } });
      setName("");
    }
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={hanleSubmit}>Submit</button>
      <div>
        {todos.map((value) => {
          return <Todo value={value} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
};
export default Reducer;
