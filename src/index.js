import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
// import { KinoProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    {/* <KinoProvider> */}
      <App />
    {/* </KinoProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
