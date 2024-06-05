import { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function App() {
  const [color, setColor] = useState("black");

  return (
    <div style={{ background: color }}>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </div>
  );
}