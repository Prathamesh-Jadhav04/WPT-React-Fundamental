import React, { useEffect, useState } from "react";

export default function Comp3() {
  let [count, setcount] = useState(100);
<<<<<<< HEAD
  let [name, setname] = useState("Gaurav");
  let [age, setage] = useState(22);
  //this will be called on component mount as well as whenever there is a change in a state variable
  // useEffect(function () {
  //  console.log("Use Effect Hook Called", count, name, age);
  // });

  // useEffect(function () {
  // console.log("Use Effect Hook Called", count, name, age);
  //}, []);
  //this use effect will be called only once
  //if you want to excute useEffect then use [] after callback function
  //This useEffect will be activated on component mount and as well as unmount
  // useEffect(function () {
  //  console.log("Use Effect Hook Called", count, name, age);
  // return () => {
  //   console.log("component unmounted");
  // };
  // }, []);

  useEffect(
    function () {
      console.log("Use Effect Hook Called", count, name, age);
    },
    [name, age],
  );
=======
  let [name, setname] = useState("Putin");
  let [age, setage] = useState(25);

  // This Will Be called on component mount as well as whenever their is a change in a state variable
  // useEffect(function () {
  //   console.log("Use Effect Hook Called ", count, name, age);
  // });

  // this use effect get called only once even if stage get changes
  //  useEffect(function () {
  //    console.log("Use Effect Hook Called ", count, name, age);
  //  },[]);

  //this useEffect will be Activated on component Bound and Component Unbound

  // useEffect(function () {
  //   console.log("Use Effect Hook Called ", count, name, age);
  //   return () => {
  //     console.log("Component unmounted !");
  //   };
  // }, []);

  // useEffect using conditional Rendering 
  useEffect(function () {
    console.log("Use Effect Hook Called ", count, name, age);
   
  }, [name,age]);
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49

  function myFunction1() {
    setcount(count + 1);
  }
  function myFunction2() {
<<<<<<< HEAD
    setname("Paras");
  }
  function myFunction3() {
    setage(age + 1);
  }

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Use Effect</h1>
      <p>count:{count}</p>
      <button onClick={myFunction1} className="border p-3">
        Update
      </button>
      <p>name:{name}</p>
      <button onClick={myFunction2} className="border p-3">
        Update
      </button>
      <p>age:{age}</p>
      <button onClick={myFunction3} className="border p-3">
        Update
=======
    setage(age + 2);
  }
  function myFunction3() {
    setname("Wenusday");
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
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
      </button>
    </div>
  );
}
