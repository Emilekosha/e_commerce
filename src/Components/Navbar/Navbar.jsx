import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState("shop")

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPING</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}> <Link style={{textDecoration:'0', color:"inherit"}}  to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:'0', color:"inherit"}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:'0', color:"inherit"}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:'0', color:"inherit"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""  width={30}/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;