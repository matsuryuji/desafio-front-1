
import "./Cart.css";
import React, { useState } from "react";
import Box from "../box/Box";
import Button from "../button/Button";

export default function CartBook({carts}){
  const [count, setCount] = useState(1);
  return(
    <div className="cart-info">
    <img src={carts.image_url} />
    <div className="cart-book">
      <span>{carts.author}</span>
      <span>{carts.title}</span>
      <Box flexDirection="row">
        <span>{carts.description}</span>
        <Button style={{width:'45px', height:'45px', margin:'0px 5px'}} title="-" onClick={()=> setCount(count - 1)}></Button>
        <Button style={{width:'45px', height:'45px'}} title="+" onClick={()=> setCount(count +1)}></Button>
      </Box>
      <div className="info-price" style={{ margin: "10px 0px", flexDirection:'column', display:'flex'}}>
        <span style={{ fontWeight: "bold" }}>
          R${carts.prince_discount * count}
        </span>
        <span style={{ fontWeight: "bold" }}>
          {count}X R${carts.prince_discount}
        </span>
      </div>
    </div>
  </div>
  )
}