import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Comp4() {
  let [data, setdata] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res);
        setdata(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">
        Fetch Data From Mongo !
      </h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value._id}>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
