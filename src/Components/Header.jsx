// eslint-disable-next-line
import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
function Header({openMenu, setOpenMenu}) {
   return (
      <>
        <nav>
         <h2>thesunnymallick</h2>
         <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#timeline">Experince</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
         </div>
         <a href="mailto:alfesunnymallick800@gmail.com"><button>Email</button></a>

    
        </nav>
        <button className='mobile-menu' onClick={()=>setOpenMenu(!openMenu)}><AiOutlineMenu/></button>

      </>
   )
}

export default Header