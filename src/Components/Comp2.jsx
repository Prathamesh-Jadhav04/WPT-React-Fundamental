import React, { useState } from "react";

export default function Comp2(props) {
  let [count, setcount] = useState(100);
  console.log(setcount);
  let [brands, setbrands] = useState(["dior", "channel"]);
  let [name, setname] = useState("Gaurav");
  let [info, setinfo] = useState({ place: "Newyork" });
  let [status] = useState(true);
  let userName = "root";
  function myFunction() {
    props.p1 = 200;
  }
  function myFunction1() {
    userName = "Vinita";
  }
   function myFunction2() {
    setcount(count+1)
  }
    function myFunction3() {
      setbrands(["Savanna", "Newme"]);
      setname("Payal");
      setinfo({ place: "Germany" })
    }
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Props Vs State</h1>
      <p>
        Props Values={props.p1}
        {props.p2}
      </p>
      <button onClick={myFunction} className="border p-3">
        Update
      </button>
      <p>local Variable={userName}</p>
      <button onClick={myFunction1} className="border p-3">
        Update
      </button>
      <p>stateVariable:{count}</p>
      <button onClick={myFunction2} className="border p-3">
        Update
      </button>
      <p>
        Brands:{brands[0]} {brands[1]}
      </p>
      <p>UserName:{name}</p>
      <p>UserPlace:{info.place}</p>
      <button onClick={myFunction3} className="border p-3">
        Update
      </button>
    </div>
  );
}
