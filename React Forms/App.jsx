import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function displayName(event) {
    setHeading(name);
    console.log(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>

      <input
        type="text"
        onChange={handleChange}
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={displayName}>Submit</button>
    </div>
  );
}

export default App;
