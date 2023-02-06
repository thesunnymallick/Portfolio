import React from 'react'
import { animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import CV from "../Assets/CV.pdf"
import me from "../Assets/me4.png"
import { useRef } from 'react'
function Home() {

   const DsaCount=useRef();
   const ProjectCount=useRef();

   const animationDasCount=()=>{
     animate(0,200,{
        duration:1,
        onUpdate: (v)=>( DsaCount.current.textContent =v.toFixed())
     })
   }
   const animationProjectCount=()=>{
    animate(0,50,{
       duration:1,
       onUpdate: (v)=>( ProjectCount.current.textContent =v.toFixed())
    })
  }


    const animation={
        h1:{
            initial:
            {
             x:"-100%",
             opacity: "0"
            },

            whileInView:
            {
            x:"0", 
            opacity:"1" 
            }

        }
    }




  return (
     <div className="home" id="home">
        
        <div className="home-1-1">

          <div>
           <motion.h1 {... animation.h1} >
            Hi, I Am <br /> Sunny Mallick
           </motion.h1>
           
           <Typewriter
           options={{
            strings:["A Developer", "A Creator", "A React Developer", "A Full Stack Developer"],
            loop:true,
            autoStart:true,
            cursor:"",
            wrapperClassName:"typeWrite"
             
           }}
          /> 
           
           <div>
            <a href="mailto:alfesunnymallick800@gmail.com">Hire me</a>
            <a href={CV} download>Download CV</a>
          </div>

          <div className='home-project'>
            
            <p>
            <span> + <motion.span whileInView={animationProjectCount} ref={ProjectCount}></motion.span> </span>

                 <span>Project Done</span>

            </p>
          </div>

          <div className='home-contact'>
            
            <p>
               <span> + <motion.span whileInView={animationDasCount} ref={DsaCount}>+</motion.span> </span>
                 <span>DSA Solved</span>
            </p>
            <p>
                <span>Contact</span>
                 <span>alfesunnymallick800@gamil.com</span>
            </p>
          </div>

          </div>

        
          
         
          



        </div>

       
         

         <div className="home-1-2">
            <img src={me} alt="thesunnymallick" />

         </div>


     </div>
  )
}

export default Home