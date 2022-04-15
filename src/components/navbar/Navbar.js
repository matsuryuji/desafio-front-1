import "./Navbar.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import USERICON from "../../../public/assets/user.svg";
import SEARCHICON from "../../../public/assets/search.svg";
import BAGICON from "../../../public/assets/shop bag.svg";
import { CartContext } from "../cart/CartContext";
function Navbar() {
  const [isClick, setIsClick] = useState(0);
  const cart = useContext(CartContext)
  console.log(JSON.stringify(cart,null, 2));
  return (
    <div className="nav-header">
      <NavLink style={{textDecoration: 'none', color:'black'}} to="/">
        <h2>Bookstore</h2>
      </NavLink>
      <div className="nav-center">
        <div>
          <a
            className={isClick == 0 ? "nav-linkActive" : "nav-link"}
            onClick={() => setIsClick(0)}
            href="#"
          >
            BOOKS
          </a>
        </div>
        <div>
          <a
            className={isClick == 1 ? "nav-linkActive" : "nav-link"}
            onClick={() => setIsClick(1)}
            href="#"
          >
            AUDIOBOOKS
          </a>
        </div>
        <div>
          <a
            className={isClick == 2 ? "nav-linkActive" : "nav-link"}
            onClick={() => setIsClick(2)}
            href="#"
          >
            STATIONERY & GIFTS
          </a>
        </div>
        <div>
          <a
            className={isClick == 3 ? "nav-linkActive" : "nav-link"}
            onClick={() => setIsClick(3)}
            href="#"
          >
            BLOG
          </a>
        </div>
      </div>
      <div className="nav-icon">
        <NavLink to="/login">
          <img src={USERICON} alt="user" />
        </NavLink>
        <NavLink to="/search">
          <img src={SEARCHICON} alt="user" />
        </NavLink>
        <NavLink to="/cart">
          <img src={BAGICON} alt="user" />
          {/* <span>{count}</span> */}
        </NavLink>
      </div>
    </div>
  );
}
export default Navbar;
