
import React, { useState } from 'react';
import Comp32 from './Comp32';
import Comp33 from './Comp33';

export default function Comp31() {
    let[category,setcategory]=useState(" ")
    function ParentFunction(value) { 
        console.log("ParentFunction Called : ",value);
        setcategory(value)
    }
  return (
    <div className="border mx-auto p-4 w-6xl">
      <h1>State Lift Example</h1>
      <hr />

      <div className="grid grid-cols-[25%_75%] gap-2">
              <Comp32 p1={ParentFunction}/>
              <Comp33 p2={ category } />
      </div>
    </div>
  );
}

