// src/CounterWidget.js

import React, { useState } from "react";

function CounterWidget() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">დინამიური მრიცხველი</h3>
        <p className="text-2xl font-bold mb-4">მრიცხველის მნიშვნელობა: {count}</p>
        <button className="border  bg-blue-600 px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white" onClick={() => setCount(count + 1)}>
          +</button>
        <button className="ml-4 border  bg-blue-600  px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white" onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}>
            -</button>
        <button className="ml-4 border  bg-blue-600 px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white " onClick={() => setCount(0)}>
            Reset</button>

    </div>
  );
}

export default CounterWidget;


// function App() {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };
//   return (
//     <div className="App">
//       <h1>{isClicked ?  "you clicked button" : "hello world" }</h1>
//       <button className="py-2 border bg-red-600" onClick={handleClick}>
//         CLICk</button>
//     </div>
//   );
// }

// export default App;
