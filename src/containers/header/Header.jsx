
import React, { useEffect, useState } from 'react';
import './header.css';
import { motion } from "framer-motion";

const Header = () => {

    const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "red",
      mixBlendMode: "darken",

    },
    disappear: {
      height: 0,
      width: 0,
      x: mousePosition.x,
      y: mousePosition.y,
      opacity: 0,
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  //const textDisappear = () => setCursorVariant("disappear")

    return (
        <div className='malithebrand__header-container  '>

            <div className='malithebrand__header-top'>

            <div className='malithebrand__header-title'>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='malithebrand__header-name tracking-in-contract-bck'>maliTheBrand</h1>
                <p onMouseEnter={textEnter} onMouseLeave={textLeave}>A SUBTLE TOUCH OF EXTRAORDINARY</p>
            </div>
            <div className='malithebrand__button'>
            <button onMouseEnter={textEnter} onMouseLeave={textLeave} className='jello-horizontal'>Contact</button>
            
            </div>

            <motion.div
     className='cursor'
     variants={variants}
     animate={cursorVariant}
     />

            </div>

      
        </div>
    )
}

export default Header