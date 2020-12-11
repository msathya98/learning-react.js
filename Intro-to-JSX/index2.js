import React from "react";
import ReactDOM from "react-dom";

const fname = "Sathya";
const lname = "M";
const num = 7;
const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1
      className="head"
      contentEditable="true"
      spellCheck="false"
      style={customStyle}
    >
      Hello {fname + " " + lname}.
    </h1>
    <div className="images">
      <img alt="random" src={img + "?garyscale"}></img>
      <img
        className="images"
        alt="kabab"
        src="https://www.thespruceeats.com/thmb/mgghjeWktybcYG5_2Ky44sslDQc=/3648x3648/smart/filters:no_upscale()/traditional-shish-kebabs-335199-hero-01-f8046460cc3d4ffb99d17743465c7cd3.jpg"
      ></img>
      <img
        className="images"
        alt="chicken vade"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtKDkU18qNXL8hEgm9MiFGPRsIyyaOJAm9Q&usqp=CAU"
      ></img>
      <img
        className="images"
        alt="shawarma role"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRMpwprX5ga5ZcZCSqxd9FWKB7nvnlNMilg&usqp=CAU"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
