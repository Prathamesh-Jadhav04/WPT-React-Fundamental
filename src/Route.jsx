import { BrowserRouter, Routes, Route } from "react-router";
import App from "./Components/App";
import Home from "./Components/Home";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Comp4 from "./Components/Comp4";
import Comp5 from "./Components/Comp5";
import Pagenotfound from "./Components/Pagenotfound";
<<<<<<< HEAD
import Comp11 from "./Components/Comp11";
=======
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49

const PROJECTROUTE = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="comp1" element={<Comp1 />} />
<<<<<<< HEAD
        <Route path="comp2" element={<Comp2 p1="100" p2="200" />} />
=======
        <Route path="comp2" element={<Comp2 p1="100" p2="200"/>} />
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
        <Route path="comp3" element={<Comp3 />} />
        <Route path="comp4" element={<Comp4 />} />
        <Route path="comp5" element={<Comp5 />} />
        <Route path="*" element={<Pagenotfound />} />
<<<<<<< HEAD
        <Route path="comp11" element={<Comp11/>} />
=======
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
      </Route>
    </Routes>
  </BrowserRouter>
);
export default PROJECTROUTE;