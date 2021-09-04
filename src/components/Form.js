import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container-5">
      <div className="form-heading">
        <h1>Register for the events</h1>
        <hr
          style={{
            border: "none",
            height: "2.5px",
          }}
        />
      </div>
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          className="form-input"
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          className="form-input"
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
}

export default Form;
