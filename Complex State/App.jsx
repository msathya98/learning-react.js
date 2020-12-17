import React, { useState } from "react";

function App() {
  const [Contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact({
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value
        };
      }
    });
  }
  

  return (
    <div className="container">
      <h1>
        Hello {Contact.fname} {Contact.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={Contact.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={Contact.lname}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={Contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
