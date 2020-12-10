import React from "react";
import ReactDOM from "react-dom";

const name = "Sathya";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}.</h1>
    <p>My lukhy is {num}</p>
  </div>,
  document.getElementById("root")
);
