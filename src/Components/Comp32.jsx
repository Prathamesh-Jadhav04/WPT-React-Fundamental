import React from "react";

export default function Comp32(props) {
  function myFunction(ev) {
    console.log(ev);
    console.log(ev.target.innerText);
    let Record = ev.target.innerText.toLowerCase().trim();
      console.log(Record);
      props.p1(Record);
  }
  return (
    <div>
      <ul>
        <li
          onClick={(ev) => {
            myFunction(ev);
          }}
        >
          Electronics
        </li>
        <li
          onClick={(ev) => {
            myFunction(ev);
          }}
        >
          Jewelery
        </li>
        <li
          onClick={(ev) => {
            myFunction(ev);
          }}
        >
          Men's Clothing
        </li>
        <li
          onClick={(ev) => {
            myFunction(ev);
          }}
        >
          Women's Clothing
        </li>
      </ul>
    </div>
  );
}
