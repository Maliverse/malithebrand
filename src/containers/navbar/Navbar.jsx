import React, { useState } from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/mvlogo1.svg';




//import { motion } from "framer-motion";

const Menu = () => (
    <>
          <ul >
          <li> <a href="#Home">Home</a></li>
          <li> <a href="#Services">Services</a></li>
            <li> <a href="#About">About</a></li>
            <li> <a href="#Projects">Projects</a></li>
            <li> <a href="#Contact">Contact</a></li>

        </ul>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return(
        <div className="navbar__container" > 
        

       
                <div className="navbar__container-logo">
              <a href="#Home"> <img className="logo" src={logo} alt="logo"/></a>
                </div>
                
                <div className="navbar__container-list">
                <Menu  />
                </div>
      

        <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-list">
           <Menu />
          </div>
                     
              </div>
            )
            }
          </div>

  

         </div>
    )
}
export default Navbar