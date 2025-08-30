export default function CounterControls({ count, setCount, disable }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setCount(count + 1)} disabled={disable}>
        +
      </button>{" "}
      <button onClick={() => setCount(count - 1)} disabled={disable}>
        -
      </button>{" "}
      <button onClick={() => setCount(0)} disabled={disable}>
        Reset
      </button>
    </div>
  );
}
