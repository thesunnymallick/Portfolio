// eslint-disable-next-line 
import React from 'react'


function PhoneNav({openMenu, setOpenMenu}) {
  return (
    <div className={`navPhone ${openMenu? "closeNavMenu": ""}`}>
        <h2>thesunnymallick</h2>
         <div>
            <a onClick={()=>setOpenMenu(false)} href="#home">Home</a>
            <a  onClick={()=>setOpenMenu(false)}  href="#about"  >About</a>
            <a    onClick={()=>setOpenMenu(false)}  href="#timeline">Experince</a>
            <a  onClick={()=>setOpenMenu(false)}  href="#services">Services</a>
            <a   onClick={()=>setOpenMenu(false)}  href="#contact">Contact</a>
         </div>
         <a href="mailto:alfesunnymallick800@gmail.com"><button>Email</button></a>
    </div>
  )
}

export default PhoneNav