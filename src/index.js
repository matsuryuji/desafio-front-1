import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/Navbar.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import Cart from "./components/cart/Cart.js";
import Checkout from "./components/checkout/Checkout.js";
import { CartProvider } from "./components/cart/CartContext.js";
import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:3333/books").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home data={data} />}></Route>
          {/* <Route exact path="/search" element={<Employee />}></Route>*/}
          <Route exact path="/cart" element={<Cart data={data} />}></Route> 
          <Route exact path="/checkout" element={<Checkout />}></Route> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
