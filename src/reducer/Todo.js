import React from "react";

export const Todo = ({ value, dispatch }) => {
  return (
    <div>
      name:
      <span style={{ color: value.completed ? "red" : "green" }}>
        {value.name}
      </span>
      <button
        onClick={() => dispatch({ type: "toggle", payload: { id: value.id } })}
      >
        toggle
      </button>
      <button
        onClick={() => dispatch({ type: "delete", payload: { id: value.id } })}
      >
        delete
      </button>
    </div>
  );
};
