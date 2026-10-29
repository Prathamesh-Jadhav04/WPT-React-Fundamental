import React, { useState } from "react";

export default function Comp2(props) {
  const [count, setCount] = useState(100);
  const [brands, setBrands] = useState(["Dior", "Chanel"]);
  const [name, setName] = useState("Gaurav");
  const [info, setInfo] = useState({ place: "New York" });
  const [status] = useState(true);
  const [valueP1, setValueP1] = useState(props.p1);

  const [userName, setUserName] = useState("root");

  function myFunction() {
    setValueP1(200);
  }

  function myFunction1() {
    setUserName("Vinita");
  }

  function myFunction2() {
    setCount((prevCount) => prevCount + 1);
  }

  function myFunction3() {
    setBrands(["Savanna", "Newme"]);
    setName("Payal");
    setInfo({ place: "Germany" });
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Props Vs State</h1>

      <p>
        Props Values: {valueP1} {props.p2}
      </p>

      <button onClick={myFunction} className="border p-3">
        Update Props Value
      </button>

      <p>Local Variable: {userName}</p>

      <button onClick={myFunction1} className="border p-3">
        Update Username
      </button>

      <p>State Variable: {count}</p>

      <button onClick={myFunction2} className="border p-3">
        Update Count
      </button>

      <p>
        Brands: {brands[0]} {brands[1]}
      </p>

      <p>Username: {name}</p>

      <p>User Place: {info.place}</p>

      <p>Status: {status ? "Active" : "Inactive"}</p>

      <button onClick={myFunction3} className="border p-3">
        Update User Details
      </button>
    </div>
  );
}
