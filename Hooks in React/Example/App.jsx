import React from "react";



function App() {

  setInterval(getTime, 1000);

const time = new Date().toLocaleTimeString();

console.log(time);

const [Time, setTime] = React.useState(time);


function getTime() {

const newTime = new Date().toLocaleTimeString();
setTime(newTime);

 }
 //setInterval(getTime, 1000);




  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
