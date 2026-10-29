
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Comp33(props) {
  let [apidata, setapidata] = useState([]);

  useEffect(function () {
    console.log("Call API", props.p2);

    let apiPath = "";

    if (!props.p2 || props.p2.trim() === "") {
      apiPath = "https://fakestoreapi.com/products";
    } else {
      apiPath = `https://fakestoreapi.com/products/category/${encodeURIComponent(props.p2)}`;
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
  }, [props.p2]);

  return (
    <div className="border p-4">
      <h1>Comp33 - Product Details</h1>
      <hr />

      {props.p2}

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
