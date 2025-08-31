import { useState } from "react";
import LoggerComponent from "./LoggerComponent";

export default function ToggleWrapper() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Logger" : "Show Logger"}
      </button>
      {show && <LoggerComponent />}
    </div>
  );
}
