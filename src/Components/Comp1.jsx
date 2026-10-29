import React, { useRef } from "react";

export default function Comp1() {
  const x1 = useRef(null);
  const x2 = useRef(null);
  const x3 = useRef(null);

  function myFunction(operator) {
    const value1 = x1.current.value;
    const value2 = x2.current.value;

    if (value1 === "" || value2 === "") {
      x3.current.innerText = "All values are required";
      return;
    }

    const data1 = Number(value1);
    const data2 = Number(value2);

    let result;

    if (operator === "*") {
      result = data1 * data2;
    } else if (operator === "+") {
      result = data1 + data2;
    } else if (operator === "-") {
      result = data1 - data2;
    } else if (operator === "/") {
      if (data2 === 0) {
        x3.current.innerText = "Cannot divide by zero";
        return;
      }
      result = data1 / data2;
    }

    x3.current.innerText = `Result: ${result}`;
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Reference Variable</h1>

      <input
        type="number"
        className="border p-2 m-2"
        ref={x1}
        placeholder="Enter first number"
      />
      <br />

      <input
        type="number"
        className="border p-2 m-2"
        ref={x2}
        placeholder="Enter second number"
      />
      <br />

      <button onClick={() => myFunction("*")} className="border p-3 m-1">
        X
      </button>

      <button onClick={() => myFunction("+")} className="border p-3 m-1">
        +
      </button>

      <button onClick={() => myFunction("-")} className="border p-3 m-1">
        -
      </button>

      <button onClick={() => myFunction("/")} className="border p-3 m-1">
        /
      </button>

      <p ref={x3} className="mt-4 text-lg font-bold"></p>
    </div>
  );
}
