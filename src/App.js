import { Header } from './containers';
import './App.css';
import Lottie from 'lottie-web';
import React from 'react';
import animation from '../src/assets/animations/solar.json';


  export default function App() {
    React.useEffect(() => {
      Lottie.loadAnimation({
        container: document.querySelector("#anime"),
        animationData: animation,
        renderer: "svg", // "canvas", "html"
        loop: true, // boolean
        autoplay: true, // boolean
        
      });
    }, []);
  

  return (
   <div className='malithebrand__center-div'>

  
   <div className='malithebrand__app-container'>
     <Header />
   </div>
   <div className='animationContainer' id='anime'></div>
   </div>

  );
}


