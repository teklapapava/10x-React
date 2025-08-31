import { useEffect, useState } from "react";

export default function LoggerComponent() {
  const [count, setCount] = useState(0);

  // Mount & Unmount
  useEffect(() => {
    console.log("Mounted");
    const interval = setInterval(() => {
      console.log("Interval tick");
    }, 1000);

    return () => {
      console.log("Unmounted");
      clearInterval(interval);
    };
  }, []);

  // Update
  useEffect(() => {
    console.log("Updated, count:", count);
  }, [count]);

  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>Logger Component</h3>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
