import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Comp5() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();

  let navigate = useNavigate();

  function myfunction() {
    let record = {
      name: x1.current.value,
      age: x2.current.value,
      place: x3.current.value,
    };

    axios
      .post("http://localhost:4003/users", record)
      .then(function (res) {
        console.log(res);
        x1.current.value = "";
        x2.current.value = "";
        x3.current.value = "";
        navigate("/comp4");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center uppercase text-2xl font-bold text-blue-700 mb-6">
        Insert Data From MongoDB!
      </h1>

      <input
        ref={x1}
        type="text"
        placeholder="ENTER NAME!"
        className="border p-2 m-2 rounded"
      />

      <input
        ref={x2}
        type="number"
        placeholder="ENTER AGE!"
        className="border p-2 m-2 rounded"
      />

      <input
        ref={x3}
        type="text"
        placeholder="ENTER PLACE ;}"
        className="border p-2 m-2 rounded"
      />

      <button
        onClick={myfunction}
        className="bg-blue-600 text-white px-5 py-2 m-2 rounded hover:bg-blue-700"
      >
        Click me
      </button>
    </div>
  );
}
