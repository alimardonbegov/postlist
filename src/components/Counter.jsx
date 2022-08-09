import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const increaseNumb = () => {
    setNumber(number + 1);
  };

  const decreaseNumb = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number} </h1>
      <button onClick={increaseNumb}> Increase </button>
      <button onClick={decreaseNumb}> Decrease </button>
    </div>
  );
}

export default Counter;
