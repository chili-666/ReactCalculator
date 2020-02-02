import React from "react";
import Calculator from "./Calculator";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="calcContainer">
        <h1>Simple Calculator</h1>
        <h3>This is a simple calculator app written in React</h3>
        <Calculator />
      </div>
    </div>
  );
}
