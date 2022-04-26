import React from 'react'
import './anime.css'
import solar from '../../assets/animations/solar.json';
import Lottie from 'lottie-web';

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
        <div className='animationContainer' id='anime'> </div>
        
      )
}

