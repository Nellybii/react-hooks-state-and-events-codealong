//import useState hook
import React, { useState } from "react";
function Toggle() {
  // initiate state
  const [isOn, setIsOn] = useState(false);
  // create a setter function
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  // use state variable in the component
  return (
    <button onClick={handleClick} style={{ background: "red" }}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
