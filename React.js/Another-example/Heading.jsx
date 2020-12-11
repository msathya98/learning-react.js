import React from "react";

function Heading() {
  var d = new Date();
  var curr_hour = d.getHours();
  //var curr_min = d.getMinutes();
  let greet;
  const customStyles = {
    color: " "
  };

  if (curr_hour < 12) {
    greet = "good morning";
    customStyles.color = "red";
  } else if (curr_hour < 16) {
    greet = "good aftenoon";
    customStyles.color = "yellow";
  } else if (curr_hour < 19) {
    greet = "good eveninng";
    customStyles.color = "blue";
  } else {
    greet = "good night";
    customStyles.color = "gray";
  }

  return (
    <div>
      <h1 style={customStyles}> Hai, {greet} </h1>
    </div>
  );
}
export default Heading;
