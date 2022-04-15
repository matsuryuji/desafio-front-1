import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Book from "../book/Book";
import Box from "../box/Box";
import Button from "../button/Button";
import CartBook from "./CartBook";
import { CartContext } from "./CartContext";
export default function Cart({ data }) {
  const cart = useContext(CartContext);
  return (
    <>
      <Box flexDirection="column" style={{margin: '0px 0px 0px 130px',justifyContent: 'center'}}>
        <h1>Your Cart</h1>
        <div>
          {Object.keys(cart.cart)?.map((key) => {
            const carts = cart.cart[key];
            return (
              <CartBook key={key} carts={carts}/>
            );
          })}
          <NavLink style={{display:'flex', justifyContent:'flex-end', marginRight:'30px'}} to="/checkout">
            <Button title="CHECKOUT"></Button>
          </NavLink>
        </div>
      </Box>
    </>
  );
}
