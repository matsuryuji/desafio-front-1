import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/search" element={<Employee />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
