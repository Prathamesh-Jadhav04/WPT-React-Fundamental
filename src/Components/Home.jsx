import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  let [data1, setData1] = useState([]);
  let [data2, setData2] = useState([]);

  useEffect(function () {
    //console.log("Called APIs")
    Promise.allSettled([
      axios.get("https://fakestoreapi.com/products"),
      axios.get("https://fakestoreapi.com/products/categories"),
    ])
      .then(function (res) {
        console.log(res);
        setData1(res[0].value.data);
        setData2(res[1].value.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  },[]);
  return (
    <div class="w-sm lg:w-6xl mx-auto pt-2 pb-2 grid grid-cols-1 lg:grid-cols-[25%_75%]">
      <aside class="p-3">
        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">Categories</h2>
          <ul class="border border-gray-300 p-2 rounded-lg">
            {data2 && data2.map((value) => <li>{value}</li>)}
          </ul>
        </section>

        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">Brands</h2>
          <ul class="border border-gray-300 p-2 rounded-lg">
            <li>
              <a href="">Xioami</a>
            </li>
            <li>
              <a href="">Apple</a>
            </li>
            <li>
              <a href="">LG</a>
            </li>
            <li>
              <a href="">Philips</a>
            </li>
          </ul>
        </section>
        <figure class="mt-2 mb-2">
          <img class="w-full" src="images/shipping.jpg" alt="" />
        </figure>
      </aside>
      <div class="p-3">
        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">
            Upcoming Products
          </h2>
          <div class="grid grid-cols-2 lg:grid-cols-3">
            {data1 &&
              data1.map((value) => (
                <figure class="text-center mt-2">
                  <img src={value.image} alt="" />
                  <figcaption>
                    <h4 class="pt-2">
                      {value.price}
                    </h4>
                    <p class="pt-2 pb-2">{value.title}</p>
                    <button class="bg-orange-500 p-2 rounded-lg text-white">
                      Add To Cart
                    </button>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
