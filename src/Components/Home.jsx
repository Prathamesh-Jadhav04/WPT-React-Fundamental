import React, { useEffect, useState } from "react";
import axios from "axios";
import { addtocart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
export default function Home() {
  let dispatch = useDispatch();
  let Navigate = useNavigate();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(function () {
    Promise.allSettled([
      axios.get("https://fakestoreapi.com/products"),
      axios.get("https://fakestoreapi.com/products/categories"),
    ]).then(function (res) {
      console.log(res);

      if (res[0].status === "fulfilled") {
        setData1(res[0].value.data);
      }

      if (res[1].status === "fulfilled") {
        setData2(res[1].value.data);
      }
    });
  }, []);

  function myFunction(value) {

    dispatch(addtocart(value));
    Navigate("/cart");
    
  }

  return (
    <div className="w-full lg:w-6xl mx-auto pt-2 pb-2 grid grid-cols-1 lg:grid-cols-[25%_75%]">
      <aside className="p-3">
        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">
            Categories
          </h2>

          <ul className="border-2 border-orange-400 p-2 rounded-lg">
            {data2.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">Brands</h2>

          <ul className="border-2 border-orange-400 p-2 rounded-lg">
            <li>
              <a href="#">New Balance</a>
            </li>
            <li>
              <a href="#">Adidas</a>
            </li>
            <li>
              <a href="#">Puma</a>
            </li>
            <li>
              <a href="#">Nike</a>
            </li>
          </ul>
        </section>

        <figure className="mt-2 mb-2">
          <img className="w-full" src="/images/shipping.jpg" alt="Shipping" />
        </figure>
      </aside>

      <div className="p-3">
        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">
            Upcoming Products
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {data1.map((value) => (
              <figure key={value.id} className="text-center mt-2">
                <img
                  className="w-full h-48 object-contain"
                  src={value.image}
                  alt={value.title}
                />

                <figcaption>
                  <h4 className="pt-2">${value.price}</h4>
                  <p className="pt-2 pb-2">{value.title}</p>

                  <button onClick={()=>{myFunction(value)}}
                    type="button"
                    className=" bg-orange-500 p-2 rounded-lg text-white"
                  >
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
