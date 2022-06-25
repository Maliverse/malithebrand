import React from "react";
import './projects.css';
import { FiFigma, FiLink } from 'react-icons/fi';


const Projects = () => {
    return(
        <div className="project__container" id="Projects">
<div className="project__title">
        <h1>Some <br /> interesting projects</h1>
 </div>

        <div className="project__cards ">
            <div className="card one">

                <div className="card-frame"></div>

                <div className="card_icon-box">
                    <div className="card_icon">
                    <FiFigma color="orange" size={30}/>
                    </div>
                    <div className="card_icon">
                    <FiLink color="orange" size={30} />
                    </div>
                </div>

               
                <div className="card_title-block"> Echohealth Website </div>
              
               </div>
            <div className="card two">

            <div className="card-frame"></div>

<div className="card_icon-box">
    <div className="card_icon">
    <FiFigma color="orange" size={30}/>
    </div>
    <div className="card_icon">
    <FiLink color="orange" size={30} />
    </div>
</div>


<div className="card_title-block"> Echohealth Website </div>
            </div>
            <div className="card three">

            <div className="card-frame"></div>

<div className="card_icon-box">
    <div className="card_icon">
    <FiFigma color="orange" size={30}/>
    </div>
    <div className="card_icon">
    <FiLink color="orange" size={30} />
    </div>
</div>


<div className="card_title-block"> Echohealth Website </div>
            </div>
            <div className="card four">

            <div className="card-frame"></div>

<div className="card_icon-box">
    <div className="card_icon">
    <FiFigma color="orange" size={30}/>
    </div>
    <div className="card_icon">
    <FiLink color="orange" size={30} />
    </div>
</div>


<div className="card_title-block"> Echohealth Website </div>
            </div>
            <div className="card five">

            <div className="card-frame"></div>

<div className="card_icon-box">
    <div className="card_icon">
    <FiFigma color="orange" size={30}/>
    </div>
    <div className="card_icon">
    <FiLink color="orange" size={30} />
    </div>
</div>


<div className="card_title-block"> Echohealth Website </div>
            </div>
            <div className="card six">

            <div className="card-frame"></div>

<div className="card_icon-box">
    <div className="card_icon">
    <FiFigma color="orange" size={30}/>
    </div>
    <div className="card_icon">
    <FiLink color="orange" size={30} />
    </div>
</div>


<div className="card_title-block"> Echohealth Website </div>
            </div>
        </div>

        </div>  
    ) 
}

export default Projects