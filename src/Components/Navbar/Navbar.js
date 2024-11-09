import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/SINCE 2020.png"
import cart_icon from "../assets/shopping-cart.png"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'

const Navbar = () => {
    const [menu,setmenu]=useState("shop")
    const {gettotalcartitems}=useContext(Shopcontext)
  return (
    <div className='Navbar'>
     <div className='nav-logo'>
        <img src={logo} className='logo1' alt=''/>
        <p>SOFT STREET</p>
     </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}>
        <Link style={{textDecoration:'none'}} to='/womens'>WOMENS</Link>{menu==="womens"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>MENS</Link>{menu==="mens"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/loginpage'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} className='cart1' alt=''/></Link>
        <div className='nav-cart-count'>{gettotalcartitems()}</div>
    </div>
    </div>
  )
}

export default Navbar

