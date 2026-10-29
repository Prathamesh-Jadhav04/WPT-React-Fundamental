import React, { useRef } from "react";

export default function Comp1() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = React.createRef();
<<<<<<< HEAD
  function myFunction() {
    console.log(x1, x2, x3);
    let data1 = x1.current.value;
    let data2 = x2.current.value;
    if (data1 == "" || data2 == "") {
      x3.current.innerText = "All Value are required";
    } else {
      data1 = +data1;
      data2 = +data2;
      console.log(typeof data1);
      x3.current.innerHTML = data1*data2;
    }
  }
  function myFunction1() {
    console.log(x1, x2, x3);
    let data1 = x1.current.value;
    let data2 = x2.current.value;
    if (data1 == "" || data2 == "") {
      x3.current.innerText = "All Value are required";
    } else {
      data1 = +data1;
      data2 = +data2;
      console.log(typeof data1);
      x3.current.innerHTML = data1+data2;
    }
  }
    function myFunction2() {
      console.log(x1, x2, x3);
      let data1 = x1.current.value;
      let data2 = x2.current.value;
      if (data1 == "" || data2 == "") {
        x3.current.innerText = "All Value are required";
      } else {
        data1 = +data1;
        data2 = +data2;
        console.log(typeof data1);
        x3.current.innerHTML = data1 - data2;
      }
  }
     function myFunction3() {
       console.log(x1, x2, x3);
       let data1 = x1.current.value;
       let data2 = x2.current.value;
       if (data1 == "" || data2 == "") {
         x3.current.innerText = "All Value are required";
       } else {
         data1 = +data1;
         data2 = +data2;
         console.log(typeof data1);
         x3.current.innerHTML = data1 / data2;
       }
     }
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Reference Variable</h1>
=======

  function myfunction(operator) {
    console.log(x1, x2, x3);
    let data1 = x1.current.value;
    let data2 = x2.current.value;

    if (data1 == "" || data2 == "") {
      x3.current.innerText = "All Values Are Required For Operation";
    } else if (operator === "*") {
      data1 = +data1;
      data2 = +data2;
      console.log(typeof data1);
      x3.current.innerText = data1 * data2;
    } else if (operator === "+") {
      data1 = +data1;
      data2 = +data2;
      x3.current.innerText = data1 + data2;
    } else if (operator === "-") {
      data1 = +data1;
      data2 = +data2;
      x3.current.innerText = data1 - data2;
    } else if (operator === "/") {
      data1 = +data1;
      data2 = +data2;
      x3.current.innerText = data1 / data2;
    }
  }
  return (
    <div className="w-xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Referance Variable</h1>
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
      <input type="text" className="border" ref={x1} />
      <br />
      <input type="text" className="border" ref={x2} />
      <br />
<<<<<<< HEAD
      <button onClick={myFunction} className="border p-3">
        X
      </button>
      <button onClick={myFunction1} className="border p-3">
        +
      </button>
      <button onClick={myFunction2} className="border p-3">
        -
      </button>
      <button onClick={myFunction3} className="border p-3">
        /
=======
      <button onClick={() => myfunction("*")} className="border p-3">
        <h1>X</h1>
      </button>
      <button onClick={() => myfunction("+")} className="border p-3">
        <h1>+</h1>
      </button>
      <button onClick={() => myfunction("-")} className="border p-3">
        <h1>-</h1>
      </button>
      <button onClick={() => myfunction("/")} className="border p-3">
        <h1>/</h1>
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
      </button>
      <p ref={x3}></p>
    </div>
  );
}
