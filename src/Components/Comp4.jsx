import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Comp4() {
  let [date, setdata] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">
        {" "}
        Fetch Data From Mongo !{" "}
      </h1>
    </div>
  );
}
