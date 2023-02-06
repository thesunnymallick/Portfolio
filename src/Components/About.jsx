import React from 'react'
import { useState } from 'react'
import me1 from "../Assets/me1.jpg"
function About() {

    const[tabs, setTabs]=useState(0)
  return (
    <div id="about">
          <div className="a-card">
            <img src={me1} alt="sunny" />
         
        </div>
      
        <div className='b-card'>
            <h2>About Me</h2>
            <p> I'm a 4th year B.tech student pursuing my bachelor's degree in Information technology from Bengal Institute Of Technology, Kolkata.
              I was made many mern stack project , just like e commerce project and I was made many project using reactJS,
              I was solve 200+ DSA question on geeks for geeks and Leetcode.</p>
            
             <div className="tab-links">
                 <li  className={tabs===0? "active":""}  onClick={()=>setTabs(0)}>Skils</li>
                 <li className={tabs===1? "active":""} onClick={()=>setTabs(1)}>Education</li>
             </div>
             
              <div className={ tabs===0?"open":"close"} id="content">
                 <div>
                 <h4>React JS</h4>
                 <p> React Developer</p>
                 </div>
                 <div>
                 <h4>UX/UI</h4>
                 <p>UX/UI Design</p>
                 </div>
                 <div>
                 <h4>Web Developer</h4>
                 <p>A bulid Responsive Website</p>
                 </div>
             </div>

             <div className={tabs===1?"open":"close"} id="content" >
               <div>
               <h4>Bengal Institute Of Technology</h4>
                 <p>betch Information Technology (2019-2023)</p>
               </div>

               <div>
               <h4>Bankura Zilla School</h4>
                 <p>School 12th (2017-2019)</p>
               </div>
               <div>
               <h4>Palasdanga High School(H.S)</h4>
                 <p>School 10th (2017)</p>
               </div>

                 
             </div>
            

        </div>
    </div>
  )
}

export default About