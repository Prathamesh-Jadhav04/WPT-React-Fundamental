import React from "react";
import { Link } from "react-router";
function Header() {
  return (
    <header class="w-sm lg:w-6xl mx-auto pt-2 pb-2 mt-2 flex flex-col lg:flex-row">
      <figure class="logo w-full lg:1/6">
        <img
          class="animate__animated animate__fadeInLeft"
          src="images/logo.png"
          alt="Logo"
        />
      </figure>
      <nav class="w-full lg:5/6">
        <ul class="flex justify-center lg:justify-end pt-2">
          <li class="pl-2 pr-2">
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="comp1">Label1</Link>
          </li>
          <li class="pl-2 pr-2">
            <Link to="comp2">Label2</Link>
          </li>
          <li class="pl-2 pr-2">
            <Link to="comp3">Label3</Link>
          </li>
          <li class="pl-2 pr-2">
            <Link to="comp4">Label4</Link>
          </li>
          <li class="pl-2 pr-2">
            <Link to="comp5">Label5</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
