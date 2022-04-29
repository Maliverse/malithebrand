import React from "react";
import './projects.css';
import { motion } from "framer-motion";

const Projects = () => {
    return(
        <div className="project__container" id="Projects">
<div className="project__title">
        <h1>Some <br /> interesting projects</h1>
 </div>

        <div className="project__cards ">
            <motion.div className="card 1"
               animate={{ rotate: 360 }}
               transition={{ duration: 2 }}
            >1</motion.div>
            <div className="card 2">2</div>
            <div className="card 3">3</div>
            <div className="card 4">4</div>
            <div className="card 5">5</div>
            <div className="card 6">6</div>
        </div>

        </div>  
    ) 
}

export default Projects