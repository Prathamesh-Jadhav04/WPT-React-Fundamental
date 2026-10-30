import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function Cart() {
  let info = useSelector((state) => state.cart.cartValue);
  let dispatch = useDispatch();

  return (
    <div>
      Cart
      <div className="grid grid-cols-4 gap-3">
        {info &&
          info.map((value) => (
            <div key={value.id} className="text-center">
              <img src={value.image} alt={value.title} />

              <h2>{value.price}</h2>

              <p>{value.title}</p>

              <button
                className="border rounded-3xl"
                onClick={() => dispatch(removeFromCart(value.id))}
              >
                Remove Product
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
