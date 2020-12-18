import React from "react";

function InputArea(props){
  return(
  <div>
    <input
    name="itemName"
    onChange={handleChange}
    type="text"
    value={typedText}
  />
  <button onClick={handleClick}>
    <span>Add</span>
  </button>)
  </div>
}

export default InputArea;
