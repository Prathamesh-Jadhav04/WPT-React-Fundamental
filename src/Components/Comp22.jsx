import React from "react";
import Comp23 from "./Comp23";
import Comp24 from "./Comp24";

export default function Comp22() {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold mb-4">Comp22</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="border p-3">
          <h3 className="font-semibold">Left</h3>
          <Comp23 />
        </div>

        <div className="border p-3">
          <h3 className="font-semibold">Right</h3>
          <Comp24 />
        </div>
      </div>
    </div>
  );
}
