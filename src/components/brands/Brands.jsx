import './brands.css';
import { agp, belmont, confirmers, igs, mirro, pulse, wa} from './imports'
const Brands = () => {
    return (
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
       
    )
}

export default Brands