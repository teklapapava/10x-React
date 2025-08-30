import { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

export default function App() {
  // Shared state for first counter
  const [count, setCount] = useState(0);

  // Independent second counter
  const [secondCount, setSecondCount] = useState(0);

  // Bonus: disable buttons
  const [disable, setDisable] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shared Counter Controller</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={disable}
            onChange={(e) => setDisable(e.target.checked)}
          />{" "}
          Disable Buttons
        </label>
      </div>

      {/* First Counter */}
      <h2>First Counter (shared)</h2>
      <CounterDisplay count={count} />
      <CounterControls count={count} setCount={setCount} disable={disable} />

      <hr />

      {/* Second Counter */}
      <h2>Second Counter (independent)</h2>
      <CounterDisplay count={secondCount} />
      <CounterControls
        count={secondCount}
        setCount={setSecondCount}
        disable={disable}
      />
    </div>
  );
}
