import React, { useState } from "react";

export default function Comp2(props) {
<<<<<<< HEAD
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
=======
  let [count, setCount] = useState(100); // dispatcher Function
  let [Brands, SetBrands] = useState(["H&M", "Playboy"]);
  let [name, setname] = useState("Modi");
  let [info, setinfo] = useState({ place: "Rome" });
  let [status] = useState(true);

  // 1. Initialize local state using the prop value as the starting point
  const [valueP1, setValueP1] = useState(props.p1);

  let userName = "root";

  function myFunction() {
    // 2. Use the setter function to update state instead of mutating directly
    setValueP1(200);
  }

  function myFunction2() {
    setCount(count + 1);
  }

  function myFunction3() {
    SetBrands(["Guchii", "Parada"]);
    setname("jim-king-woo");
    setinfo({ place: "Saudi-Arebia" });
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Props And Border</h1>

      <p>
        Props Values={valueP1}
        {props.p2}
      </p>

      {/* 3. Pass the function by name (without parentheses) */}
      <button onClick={myFunction} className="border p-3">
        Change Value
      </button>

      <p>localVariable={userName}</p>

      <button onClick={myFunction} className="border p-3">
        Pookie
      </button>

      <p>stateVariable:{count}</p>

      <button onClick={myFunction2} className="border p-3">
        Pookie Update
      </button>

      <p>
        Brands:{Brands[0]}
        {Brands[1]}
      </p>

      <p>Username:{name}</p>

      <p>Userplace:{info.place}</p>

      <button onClick={myFunction3} className="border p-3">
        Khuchipuchikoo kya hua?
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
      </button>
    </div>
  );
}
