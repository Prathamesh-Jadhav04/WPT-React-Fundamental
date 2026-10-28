import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Comp5() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  let navigat=useNavigate()

  function myFunction() {
    let record = { name: x1.current.value, age: x2.current.value, place: x3.current.value }
  
    axios.post("http://localhost:4003/users", record)
      .then(function (res) {
        console.log(res);
        navigat("/comp4")
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Data from MongoDB</h1>
      <input ref={x1} type="text" placeholder="Enter Name" className="border" />
      <br></br>
      <input ref={x2} type="text" placeholder="Enter Age" className="border" />
      <br></br>
      <input ref={x3} type="text" placeholder="Enter Place" className="border" />
      <br></br>
      <button onClick={myFunction}>Add</button>
    </div>
  );

}