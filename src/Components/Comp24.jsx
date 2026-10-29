import React, { useContext, useEffect } from "react";
import CONTEXT from "../ContextApi";
import axios from "axios";

export default function Comp24() {
  let Result = useContext(CONTEXT);
  useEffect(function () {
    console.log("Call API ", Result);
  },[Result]);
  return (
    <div>
      Comp24
      <hr />
      {Result}
    </div>
  );
}
