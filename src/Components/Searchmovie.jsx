import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Image from "./Image";
import ErrorBoundary from "../ErrorBoundary";
import { Link } from "react-router";

export default function Searchmovie() {
  let Record = useSelector((state) => state.search.movieName);

  let [apidata, setapidata] = useState([]);

  let movieValue = useMemo(() => {
    let moviePrice = 1000;
    let fee = 100;
    let GST = 18;

    let Total = (moviePrice + fee) * (GST / 100) + (moviePrice + fee);

    console.log("Total Price :- ", Total);
    return Total;
  }, []);

  useEffect(
    function () {
      if (!Record) {
        setapidata([]);
        return;
      }

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=263969180f620b2160c1aea08bba6347&language=en-US&query=${encodeURIComponent(Record)}&page=1`,
        )
        .then(function (res) {
          console.log(res);
          setapidata(res.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [Record],
  );

  return (
    <div>
      Searchmovie
      {Record}
      <div className="grid gap-3.5 grid-cols-4">
        {apidata.map((value) => (
          <div key={value.id}>
            <ErrorBoundary>
              <Image p1={value.poster_path} />
              <p>
                <Link to={"/singlemovie/" + value.id}>{value.title}</Link>
              </p>
              <p>Total Price: ₹{movieValue}</p>
            </ErrorBoundary>
          </div>
        ))}
      </div>
    </div>
  );
}
