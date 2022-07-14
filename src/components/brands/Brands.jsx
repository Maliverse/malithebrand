import './brands.css';
import { agp, belmont, confirmers, igs, mirro, pulse} from './imports';
//import Marquee from 'react-fast-marquee';



const Brands = () => {

  const brandsObserver = document.querySelectorAll('.brands__container')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('slide', entry.isIntersecting)
       //if(entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
        {
            threshold: 0.1
        }
    )
  
    brandsObserver.forEach(brands__container => {
      observer.observe(brands__container)
      }) 

    return (
     // <Marquee className='marquee' behavior="scroll" direction="left" speed={100} gradientColor="black">
     
        <div className='brands__container'>
         <div className='brand one'>
        <img src={agp} alt="agp" />    
      </div>

      <div className='brand two'>
      <img src={belmont} alt="belmont" />
      </div>

      <div className='brand three'>
      <img src={confirmers} alt="confirmers" />
      </div>

      <div className='brand four'>
      <img src={igs} alt="igs" />
      </div>

      <div className='brand five'>
      <img src={mirro} alt="mirro" />
      </div>

      <div className='brand six'>
      <img src={pulse} alt="pulse" />
      </div>

      

      </div>
      // </Marquee>
    )
}

export default Brands