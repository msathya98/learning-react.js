import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/App";
import emojipedia from "./emojipedia";

//ReactDOM.render(<App />, document.getElementById("root"));
console.log(emojipedia);

const string = emojipedia.meaning;
const concateString = string.substring(0, 99);  

console.log(concateString);
