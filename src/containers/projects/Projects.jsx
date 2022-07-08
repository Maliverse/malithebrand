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

                <div className="card-frame cardOne"></div>

                <div className="card_icon-box">
                    <div className="card_icon">
                  <a href="https://www.figma.com/file/F4agL7FPCmFIl6IqXvgMQy/NEXUS-HUMANITARIAN?node-id=0%3A1"> <FiFigma color="orange" size={30}/></a> 
                    </div>
                    <div className="card_icon">
                        <a href="https://maliverse.github.io/echohealth"> <FiLink color="orange" size={30} /></a>
                   
                    </div>
                </div>

               
                <div className="card_title-block"> Echohealth Website </div>
              
               </div>


            <div className="card two">

            <div className="card-frame cardTwo"></div>

<div className="card_icon-box">
    <div className="card_icon">
    <a href="https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1"> <FiFigma color="orange" size={30}/></a>
    </div>
    <div className="card_icon">
        <a href="https://maliverse.github.io/ai-website-react/">   <FiLink color="orange" size={30} /></a>
    </div>
</div>


<div className="card_title-block"> GPT3 OPEN AI </div>
            </div>


            <div className="card three">

            <div className="card-frame cardThree"></div>

<div className="card_icon-box">
    <div className="card_icon">
        <a href="https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A1"> <FiFigma color="orange" size={30}/></a>
   
    </div>
    <div className="card_icon">
   {/* <FiLink color="orange" size={30} /> */} 
    </div>
</div>


<div className="card_title-block"> Nexus Humanitarian </div>
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


<div className="card_title-block"> Project </div>
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

{/* 
<div className="card_title-block"> Project </div>
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
*/}

<div className="card_title-block"> Project </div>
            </div>
        </div>

        </div>  
    ) 
}

export default Projects