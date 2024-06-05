import { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function App() {
  const [counter , setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter+1)
  }

  const subvalue = () => {
    setCounter(counter-1)
  }

  return (
    <div>
      <h1> counter Value : {counter}</h1>
      <button onClick={addValue}>add Value</button>
      <button onClick={subvalue}>sub Value</button>
    </div>
  );
}


