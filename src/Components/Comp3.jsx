import React, { useEffect, useState } from "react";

export default function Comp3() {
  const [count, setcount] = useState(100);
  const [name, setname] = useState("Gaurav");
  const [age, setage] = useState(22);

  // useEffect runs when the component mounts
  // and whenever name or age changes.
  useEffect(
    function () {
      console.log("Use Effect Hook Called", count, name, age);
    },
    [name, age],
  );

  function myFunction1() {
    setcount(count + 1);
  }

  function myFunction2() {
    setname("Paras");
  }

  function myFunction3() {
    setage(age + 1);
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Use Effect</h1>

      <p>Count: {count}</p>
      <button onClick={myFunction1} className="border p-3">
        Update Count
      </button>

      <p>Name: {name}</p>
      <button onClick={myFunction2} className="border p-3">
        Update Name
      </button>

      <p>Age: {age}</p>
      <button onClick={myFunction3} className="border p-3">
        Update Age
      </button>
    </div>
  );
}
