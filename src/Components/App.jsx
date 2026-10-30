import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { provider } from "react-redux";
import mystore from "../redux/mystore";

export default function App() {
  return (
    <>
      <provider store={mystore}>
      <Header />
      <Outlet />
      <Footer />
      </provider>
    </>
  );
}
