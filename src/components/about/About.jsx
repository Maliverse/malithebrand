import './about.css'
import aboutImage from '../../assets/images/maliweb.jpg'

const About = () => {
    return(
        <div className='about__container'>
            <div className='about__content'>
            <img className='about__image'  src={aboutImage} alt=""  />
            <div className='about__text'>
                <h1 className=''>Akwunté Amali</h1>
                <p>DESIGNER & DEVELOPER </p>
                <button className='jello-horizontal'>See More</button>
                
                </div>
       
           
            </div>
        </div>
    )
}
export default About