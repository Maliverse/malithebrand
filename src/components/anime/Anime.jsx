import React from 'react'
import './anime.css'
import solar from '../../assets/animations/solar.json';
import Lottie from 'lottie-web';
import Marquee from "react-fast-marquee";


    export default function Anime () {
        React.useEffect(() => {
          Lottie.loadAnimation({
            container: document.querySelector("#anime"),
            animationData: solar,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
           
          });
        }, []);
      return(
        <div className='animationParent'>
        <div className='animationContent'>

             <div className='animationContainer' id='anime'>
               
             <div className='animationText'>
               <Marquee className='marquee' behavior="scroll" direction="left" speed={100} gradientColor="black">
                <p>  A BRAVE NEW WORLD <span>Of  Endless  Possibiliities. </span> </p>
                </Marquee>
             </div>

             </div>
            
        </div>
        <div className='animationText'>
               <Marquee className='marquee' behavior="scroll" direction="right" speed={100} gradientColor="black">
               <p>  A BRAVE NEW WORLD <span>Of  Endless  Possibilities. </span> </p>
                </Marquee>
             </div>

        </div>
      )
}

