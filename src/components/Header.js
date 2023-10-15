import React from 'react'
import Logo from "../assets/Logo1.png"
import {Link,NavLink} from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
    
<header>
   <Link to="/" className="logo">
     <img src={Logo} className='h-10 w-10' alt="Shopmate Logo"/>
     <span className='text-2xl font-semibold'>AudioBuddy</span>
   </Link>
  <nav className='navigation'>
    <NavLink to="/" className="link" end>Home</NavLink>
    <NavLink to="/cart" className="link">Cart</NavLink>
  </nav>
  <Link to="/cart" className='items'>
    <span>Cart: 2</span>
  </Link>
</header>


   

  )
}
