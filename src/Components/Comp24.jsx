import React, { useContext, useEffect } from "react";
import CONTEXT from "../ContextApi";
import axios from "axios";

export default function Comp24() {
  let Result = useContext(CONTEXT);
  useEffect(
    function () {
      console.log("Call API ", Result);
      let apiPath = " ";
      if (Result == " ") {
        apiPath = "https://fakestoreapi.com/products";
      } else {
        apiPath = `https://fakestoreapi.com/products/category/${category}`;
          }
          
          
    },
    [Result],
  );
  return (
    <div>
      Comp24
      <hr />
      {Result}
    </div>
  );
}
