import React from "react";
import ReactDOM from "react-dom";

const fName = "Raj";
const lName = "Jagasia";
const num = 9;
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your Lucky Number is {num}</p>
  </div>,

  document.getElementById("root")
);
