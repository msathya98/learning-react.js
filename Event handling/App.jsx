import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Sathya");
  const [isMouseOver, setmouseover] = React.useState(false);
  function handleClick() {
    setHeadingText("Submitted");
  }
  //var x = document.getElementByTagName("button");

  function handleMouseOver() {
    setmouseover(true);
  }
  function handleMouseOut() {
    setmouseover(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
