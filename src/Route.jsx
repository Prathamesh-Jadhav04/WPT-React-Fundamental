import { BrowserRouter, Routes, Route } from "react-router";

import App from "./Components/App";
import Home from "./Components/Home";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Comp4 from "./Components/Comp4";
import Comp5 from "./Components/Comp5";
import Comp11 from "./Components/Comp11";
import Comp21 from "./Components/Comp21";
import Comp31 from "./Components/Comp31";
import Comp41 from "./Components/Comp41";
import Searchmovie from "./Components/Searchmovie";
import Pagenotfound from "./Components/Pagenotfound";
import Singlemovie from "./Components/Singlemovie";

const PROJECTROUTE = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="comp1" element={<Comp1 />} />
        <Route path="comp2" element={<Comp2 p1="100" p2="200" />} />
        <Route path="comp3" element={<Comp3 />} />
        <Route path="comp4" element={<Comp4 />} />
        <Route path="comp5" element={<Comp5 />} />
        <Route path="comp11" element={<Comp11 />} />
        <Route path="comp21" element={<Comp21 />} />
        <Route path="comp31" element={<Comp31 />} />
        <Route path="comp41" element={<Comp41 />} />
        <Route path="search" element={<Searchmovie />} />
        <Route path="singlemovie/:id" element={<Singlemovie />} />
        <Route path="*" element={<Pagenotfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default PROJECTROUTE;
