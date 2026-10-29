<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
=======
import axios from "axios";
import React, { useEffect, useState } from "react";
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49

export default function Home() {
  let [data1, setData1] = useState([]);
  let [data2, setData2] = useState([]);
<<<<<<< HEAD
  //useeffect prevent unwanted calls
  useEffect(function () {
    //console.log("Called by APIs");
=======

  useEffect(function () {
    //console.log("Called APIs")
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
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
<<<<<<< HEAD
  }, []);
  return (
    <div class="w-sm lg:w-6xl mx-auto pt-2 pb-2 grid gird-cols-1 lg:grid-cols-[25%_75%]">
      <aside class="p-3">
        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">Categories</h2>
          <ul class="border-2 border-orange-400 p-2 rounded-lg">
            {data2 && data2.map((value) => <li>{value}</li>)}
          </ul>
        </section>
        <section>
          <h2 class="uppercase text-center text-2xl pt-3 pb-3">Brand</h2>
          <ul class="border-2 border-orange-400 p-2 rounded-lg">
            <li>
              <a href="">New Balance</a> <span class="float-end"></span>
            </li>
            <li>
              <a href="">Addidas</a>
            </li>
            <li>
              <a href="">Puma</a>
            </li>
            <li>
              <a href="">Nike</a>
=======
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
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
            </li>
          </ul>
        </section>
        <figure class="mt-2 mb-2">
<<<<<<< HEAD
          <img class="w-full" src="images/shipping.jpg" alt="Shipping" />
=======
          <img class="w-full" src="images/shipping.jpg" alt="" />
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
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
<<<<<<< HEAD
                  <img src={value.image} alt=""/>
=======
                  <img src={value.image} alt="" />
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
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
