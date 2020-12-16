import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  /*ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>,
    document.getElementById("root")
  );*/

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
