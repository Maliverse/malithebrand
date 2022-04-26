import React from "react";
import './navbar.css';
import logo from '../../assets/mvlogo1.svg';
const Navbar = () => {
    return(
        <div className="navbar__container"> 
        <div className="navbar__container-logo">
        <img src={logo} alt="logo"/>
        </div>
      
        <div className="navbar__container-list">
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Blog</li>
        </ul>
        </div>
       
         </div>
    )
}
export default Navbar