import React from "react";
import "./Book.css";
import Box from "../box/Box"
import Button from "../button/Button";
import { useState, useContext } from "react";
import { CartContext } from "../cart/CartContext";
export default function Book({book}){
  const cart = useContext(CartContext)
  const add = (book) => () => {
    cart.addToCart(book)
  }
  return (
    <div className="home-info">
      <img src={book.image_url} />
      <div className="info-book">
        <span>{book.author}</span>
        <span>{book.title}</span>
        <Box flexDirection="row">
          <div className="star-rating">
            <span style={{ width: `calc(${book.stars}*12px)` }}></span>
          </div>
          <span style={{ paddingLeft: "5px" }}>{book.review}</span>
        </Box>
        <span>{book.description}</span>
        <div className="info-price" style={{margin: "10px 0px"}}>
          <span style={{ fontWeight: "bold" }}>R${book.prince_discount}</span>
          <span style={{ textDecoration: "line-through", marginLeft: "3px" }}>
            R${book.price}
          </span>
        </div>
          <Button title="BUY NOW" onClick={add(book)}></Button>
      </div>
    </div>
  );
}
