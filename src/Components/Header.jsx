import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      {/* Header */}
      <header className="w-full lg:w-6xl mx-auto pt-2 pb-2 flex flex-col lg:flex-row">
        <figure className="logo w-full lg:w-1/6">
          <img
            className="animate__animated animate__bounce"
            src="/images/logo.png"
            alt="Logo"
          />
        </figure>

        <nav className="w-full lg:w-5/6">
          <ul className="flex justify-end pt-2">
            <li className="px-2">
              <Link to="">home</Link>
            </li>
            <li className="px-2">
              <Link to="comp1">log-In</Link>
            </li>
            <li className="px-2">
              <Link to="comp2">Sign-up</Link>
            </li>
            <li className="px-2">
              <Link to="comp3">Shop</Link>
            </li>
            <li className="px-2">
              <Link to="comp4">About us</Link>
            </li>
            <li className="px-2">
              <Link to="comp5">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* End Header */}

      {/* Banner */}
      <figure className="w-full lg:w-6xl mx-auto pt-2 pb-2">
        <img
          className="w-full animate__animated animate__rubberBand"
          src="https://cmsimagesv2.shoppersstop.com/V1_Web_98bcd69c70/V1_Web_98bcd69c70.jpg"
          alt="Watches collection"
        />
      </figure>
      {/* End Banner */}
    </>
  );
}

export default Header;
