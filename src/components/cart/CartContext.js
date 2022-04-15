import { createContext, useContext, useState } from "react";
import React from "react";
export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({})
  const addToCart = (book) =>{
    setCart((old)=> ({
      ...old,
      [book.id]: book,
    }))

  }
  return(
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}
