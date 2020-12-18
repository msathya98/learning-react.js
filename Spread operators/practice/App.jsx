import React from "react";
import ToDoitem from "./ToDoitem";
//import InputArea from "./InputArea";

function App() {
  const [typedText, setText] = React.useState();
  const [itemList, setItemlist] = React.useState([]);

  function handleChange(event) {
    //const { name, value } = event.target;
    setText(event.target.value);
    console.log(event.target.value);
  }

  function handleClick(event) {
    setItemlist((prevValue) => {
      return [...prevValue, typedText];
    });
    setText(" ");
  }

  function deleteItem(id) {
    console.log(id);
    setItemlist((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
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
      </div>
      <div>
        <ul>
          {itemList.map((item, index) => (
            <ToDoitem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
           
           
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
