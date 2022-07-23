import './about.css'
import aboutImage from '../../assets/images/maliwebcolor.png';
import Marquee from "react-fast-marquee";
// import { Link } from 'react-router-dom';
import Me from '../../pages/Me';
import { Route, Routes } from 'react-router-dom';

const About = () => {
    return(


      
        <div className='about__container' id='About'>
             <div className='animationText'>
               <Marquee className='marquee' behavior="scroll" direction="left" speed={100} gradientColor="black">
                <p>  A BRAVE NEW WORLD OF <span> ENDLESS POSSIBILITIES. </span> </p>
                </Marquee>
             </div>

            <div className='about__content '>
                



            <div className='about__text'>
                <h1 className='aboutName'>Akwunté Amali</h1>
                <p className='about-title'>DESIGNER & DEVELOPER </p>
              <p className='about-intro'>Akwunté “Maliverse” Amali is a developer and designer hybrid who is highly intrigued by technology, branding and innovation.
                With a strong background in design and with his skills in advanced development tools, <br /> he is dedicated to building visually stunning user-centered products, relevant for the modern age.</p>
    {/* <Link to='/me'> <button>See more</button></Link> */}
                </div>
                <div className='about__image-container'>
                <img className='aboutImage' src={aboutImage} alt="Akwunte" />
                </div>
              
           
            </div>



            <div className='animationText'>
               <Marquee className='marquee' behavior="scroll" direction="right" speed={100} gradientColor="black">
                <p> BUILDING <strong> BRANDS THAT WIN </strong> CONSISTENTLY. </p>
                </Marquee>
             </div>

             <Routes>
             <Route path='me' element={<Me />}> </Route>
             </Routes>

        </div>
      
    )
}
export default About