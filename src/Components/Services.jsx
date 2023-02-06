import React from 'react'
import { motion } from "framer-motion"
import {FaReact} from "react-icons/fa"
import {CgWebsite} from "react-icons/cg"
import {DiJavascript1} from "react-icons/di"

function Services() {


    const animation={
        whileInView:{
           x:0,
           y:0,
           opacity:1
        },
        initial:{
         y:"-100%",
         opacity:0
        }
    }




    return (
        <div id="services">
            <h2>Services</h2>
            <div className='servicesItem'>
                <motion.div whileInView={animation.whileInView} initial={animation.initial}>
                    <h3>2+</h3>
                    <p>Year of Experince</p>
                </motion.div>

                <motion.div whileInView={animation.whileInView} initial={animation.initial} >
                   <FaReact/>
                    <p>React Developer</p>
                </motion.div>

                <motion.div whileInView={animation.whileInView} initial={animation.initial} >
                   <CgWebsite/>
                    <p>Web Development</p>
                </motion.div>

                <motion.div whileInView={animation.whileInView} initial={animation.initial} >
                    <DiJavascript1/>
                    <p>JavaScript Developer</p>
                </motion.div>
            </div>

        </div>
    )
}

export default Services