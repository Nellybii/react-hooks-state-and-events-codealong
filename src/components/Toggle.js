//import useState hook
import React, { useState } from "react";
function Toggle() {
  // initiate state
  const [isOn, setIsOn] = useState(false);
  // create a setter function
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white"
  // use state variable in the component
  return (
    <button style={{ background: color}} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
