import './about.css'
import aboutImage from '../../assets/images/maliweb.jpg'

const About = () => {
    return(


      
        <div className='about__container'>
            <div className='about__content'>

            <div className='about__text'>
                <h1 className='aboutName'>Akwunté Amali</h1>
                <p>DESIGNER & DEVELOPER </p>
                <button className='jello-horizontal'>See More</button>
                </div>
                <img className='aboutImage' src={aboutImage} alt="" />
           
            </div>
        </div>
      
    )
}
export default About