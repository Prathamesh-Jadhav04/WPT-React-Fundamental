import React, { useContext, useEffect, useState } from "react";
import CONTEXT from "../ContextApi";
import axios from "axios";

export default function Comp24() {
  let Result = useContext(CONTEXT);
  let [apidata, setapidata] = useState([]);

  useEffect(
    function () {
      console.log("Call API ", Result);

      let apiPath = "";

      if (!Result || Result.trim() === "") {
        apiPath = "https://fakestoreapi.com/products";
      } else {
        apiPath = `https://fakestoreapi.com/products/category/${encodeURIComponent(Result)}`;
      }

      axios
        .get(apiPath)
        .then(function (res) {
          console.log(res);
          setapidata(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    [Result],
  );

  return (
    <div>
      Comp24
      <hr />
      {Result}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {apidata.map((value) => (
          <figure key={value.id} className="border p-3 rounded-lg">
            <img
              src={value.image}
              alt={value.title}
              className="w-full h-48 object-contain"
            />

            <figcaption>
              <h2 className="font-bold">${value.price}</h2>
              <p>{value.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
