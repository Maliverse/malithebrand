import './brands.css';
import { agp, belmont, confirmers, igs, mirro, pulse, wa} from './imports';
import Marquee from 'react-fast-marquee';

const Brands = () => {
    return (
     // <Marquee className='marquee' behavior="scroll" direction="left" speed={100} gradientColor="black">
        <div className='brands__container'>
         <div className='brand'>
        <img src={agp} alt="agp" />    
      </div>

      <div className='brand'>
      <img src={belmont} alt="belmont" />
      </div>

      <div className='brand'>
      <img src={confirmers} alt="confirmers" />
      </div>

      <div className='brand'>
      <img src={igs} alt="igs" />
      </div>

      <div className='brand'>
      <img src={mirro} alt="mirro" />
      </div>

      <div className='brand'>
      <img src={pulse} alt="pulse" />
      </div>

      <div className='brand'>
      <img src={wa} alt="wa" />
      </div>

      </div>
      // </Marquee>
    )
}

export default Brands