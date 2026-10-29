import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
import ErrorBoundary from "../ErrorBoundary";

export default function Comp34() {
  let [info, setinfo] = useState([]);

  useEffect(function () {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/1058424/credits?api_key=263969180f620b2160c1aea08bba6347&language=en-US`,
      )
      .then(function (res) {
        console.log(res.data);
        setinfo(res.data.cast);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="border mx-auto w-7xl p-4">
      <h1 className="text-2xl">Error Boundary Example</h1>
      <hr />

      <div className="grid gap-2.5 grid-cols-6">
        {info &&
          info.map((value) => (
            <div key={value.id} className="text-center">
              <ErrorBoundary>
                <Image p1={value.profile_path} />
              </ErrorBoundary>
              <p>{value.name}</p>
            </div>
          ))}
      </div>

      <p>Movie cast details are displayed above.</p>
    </div>
  );
}
