import "./App.css";
import { useState } from "react";

function Incrementor() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) {
      setCounter((prevValue) => {
        for (let i = 0; i < 10; i++) {
          prevValue += 1;
        }
        return prevValue;
      });
    } else {
      alert("Counter cannot be more than 10");
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("cannot be less than 0");
    }
  };

  return (
    <>
      <p>my Counter = {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Incrementor;
