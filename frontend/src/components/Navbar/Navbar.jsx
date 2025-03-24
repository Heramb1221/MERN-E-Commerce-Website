import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/Frontend_Assets/logo.png';
import cart_icon from '../assets/Frontend_Assets/cart_icon.png';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="name-logo">
            <img src={logo} alt="" />
            <p>VougeVault</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button>LogIn</button>
            <img src={cart_icon} alt="" />
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar