import React, { Component } from 'react';
import './services.css';
import { RiPencilRulerLine, RiCodeSSlashFill, RiMacbookFill } from 'react-icons/ri';



class Services extends Component {
    render () {
   
    return(
        <div className='malithebrand__product-offerings'>

        <div className='malithebrand__product-offerings_brand-identity'>
        <div className='malithebrand__product-offerings_brand-identity-card'>
         <div className='brand-icon'> <RiPencilRulerLine color="orange" size={57}/> </div> 
        </div>
        <p>Brand Identity Design</p>
        </div>
        

        <div className='malithebrand__product-offerings_ui-ux'>
        <div className='malithebrand__product-offerings_ui-ux-card'>
        <div className='brand-icon'> <RiMacbookFill color="orange" size={57}/> </div> 
        </div>
        <p>UI/UX Design</p>
        </div>
       

        <div className='malithebrand__product-offerings_web-dev'>
        <div className='malithebrand__product-offerings_web-dev-card'>
        <div className='brand-icon'> <RiCodeSSlashFill color="orange" size={57}/> </div> 
        </div>
        <p>Web Development</p>
        </div>
        
    </div>
    )
     
  }
} 
export default Services