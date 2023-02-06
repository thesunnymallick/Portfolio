import React from 'react'
import me1 from "../Assets/me1.jpg"

import {AiOutlineInstagram,
     AiOutlineFacebook,
    AiOutlineGithub,
 AiOutlineLinkedin,} from "react-icons/ai"
// 
function Footer() {
  return (
   <>
    <div className="footer">

<section>
 <div>
   <img src={me1} alt="sunny mallick" />
     <h2>Sunny Mallick</h2>
     <p>Put the past behind you, the present moment is all that matters, 
       in the life of those who want to be happy.</p>
 </div>  

 <div className='social-link'>
   <a href="https://www.facebook.com/thesunnymallick/" target="blank"><AiOutlineFacebook/> </a>
   <a href="https://github.com/thesunnymallick"    target="blank"><AiOutlineGithub/> </a>
   <a href="https://www.instagram.com/themallicksunny/"  target="blank"><AiOutlineInstagram/> </a>
   <a href="https://www.linkedin.com/in/thesunnymallick/"   target="blank"><AiOutlineLinkedin/> </a>
 </div>
</section>







 </div>

   <div className="footer-main">
     <p>Copyright © 2023 All Rights Reserved by Sunny Mallick</p>
   </div>
   </>
  )
}

export default Footer