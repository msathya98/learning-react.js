import React from "react";
import ReactDOM from "react-dom";

let count = 1;
function increment() {
  count++;
  console.log(count);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}
ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
  </div>,
  document.getElementById("root")
);
