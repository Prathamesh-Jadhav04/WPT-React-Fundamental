
import React, { useState } from "react";

export default function Comp2(props) {
  const [p1, setP1] = useState(props.p1);
  const [userName, setUserName] = useState("root");

  function myfunction() {
    setP1(200);
  }

  function myfunction1() {
    setUserName("joroot");
  }

  return (
    <div className="w-xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">
        Props Vs State
      </h1>

      <p>
        Props value: {p1} {props.p2}
      </p>

      <button
        onClick={myfunction}
        className="border p-3"
      >
        Update Props Value
      </button>

      <p>Local Variable: {userName}</p>

      <button
        onClick={myfunction1}
        className="border p-3"
      >
        Update User Name
      </button>
    </div>
  );
}
