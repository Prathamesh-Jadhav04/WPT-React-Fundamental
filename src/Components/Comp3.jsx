import React, { useEffect, useState } from "react";

export default function Comp3() {
  let [count, setcount] = useState(100);
  let [name, setname] = useState("Putin");
  let [age, setage] = useState(25);

  // This Will Be called on component mount as well as whenever their is a change in a state variable
  useEffect(function () {
    console.log("Use Effect Hook Called ", count, name, age);
  });
  function myFunction1() {
    setcount(count + 1);
  }
  function myFunction2() {
    setname("Wenusday");
  }
  function myFunction3() {
    setage(age + 2);
  }
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl"> Use Effect ! </h1>

      <p>count:{count}</p>

      <button onClick={myFunction1} className="border p-3">
        😭?
      </button>

      <p>Age:{age}</p>
      <button onClick={myFunction2} className="border p-3">
        🫪!!
      </button>

      <p>Name:{name}</p>
      <button onClick={myFunction3} className="border p-3">
        🎃?
      </button>
    </div>
  );
}
