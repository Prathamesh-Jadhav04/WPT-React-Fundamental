import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { searchMovie } from "../redux/slices/searchSlice";
import { useDispatch } from "react-redux";

function Header() {
  let x1 = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  function myFunction() {
    if (x1.current.value != "") {
      dispatch(searchMovie(x1.current.value));
      navigate("/search");
    }
  }

  return (
    <>
      <header className="w-full lg:w-6xl mx-auto pt-2 pb-2 mt-2 flex flex-col lg:flex-row">
        <figure className="logo w-full lg:w-1/6">
          <img
            className="animate__animated animate__fadeInLeft"
            src="/images/logo.png"
            alt="Logo"
          />
        </figure>

        <nav className="w-full lg:w-5/6">
          <ul className="flex flex-wrap justify-center lg:justify-end pt-2">
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/comp1">Label1</Link>
            </li>
            <li className="px-2">
              <Link to="/comp2">Label2</Link>
            </li>
            <li className="px-2">
              <Link to="/comp3">Label3</Link>
            </li>
            <li className="px-2">
              <Link to="/comp4">Label4</Link>
            </li>
            <li className="px-2">
              <Link to="/comp5">Label5</Link>
            </li>
            <li className="px-2">
              <Link to="/comp11">Props Drilling</Link>
            </li>
            <li className="px-2">
              <Link to="/comp21">Context API</Link>
            </li>
            <li className="px-2">
              <Link to="/comp31">State Lift</Link>
            </li>
            <li className="px-2">
              <Link to="/comp41">Error Boundry</Link>
            </li>

            <li className="px-2">
              <input
                ref={x1}
                type="text"
                className="border cursor-pointer rounded-4xl"
              />

              <button
                onClick={myFunction}
                className="border cursor-pointer rounded-3xl"
              >
                Search
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <figure className="w-full lg:w-6xl mx-auto pt-2 pb-2">
        <img
          className="w-full h-auto animate__animated animate__rubberBand"
          src="https://cmsimagesv2.shoppersstop.com/V1_Web_98bcd69c70/V1_Web_98bcd69c70.jpg"
          alt="Watches collection"
        />
      </figure>
    </>
  );
}

export default Header;
