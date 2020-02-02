import React from "react";

function ResultDisplay(props) {
  const display = props.show ? props.show : props.pressed;
  console.log("DisplayProps", props);
  return <span>{display}</span>;
}

export default ResultDisplay;
