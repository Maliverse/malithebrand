import './about.css'
import aboutImage from '../../assets/images/maliweb.jpg'
import Marquee from "react-fast-marquee";
const About = () => {
    return(


      
        <div className='about__container'>
             <div className='animationText'>
               <Marquee className='marquee' behavior="scroll" direction="left" speed={100} gradientColor="black">
                <p>  A BRAVE NEW WORLD <span>OF ENDLESS POSSIBILITIES. </span> </p>
                </Marquee>
             </div>

            <div className='about__content'>

            <div className='about__text'>
                <h1 className='aboutName'>Akwunté Amali</h1>
                <p>DESIGNER & DEVELOPER </p>
                <button className='jello-horizontal'>See More</button>
                </div>
                <img className='aboutImage' src={aboutImage} alt="" />
           
            </div>

            <div className='animationText'>
               <Marquee className='marquee' behavior="scroll" direction="right" speed={100} gradientColor="black">
                <p>  A BRAVE NEW WORLD <span>OF ENDLESS POSSIBILITIES. </span> </p>
                </Marquee>
             </div>

        </div>
      
    )
}
export default About