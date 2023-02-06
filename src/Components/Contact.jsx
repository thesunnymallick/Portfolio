import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import me from "../Assets/me4.png"
import {addDoc, collection} from "firebase/firestore"
import {db} from "../firebase"
function Contact() {

   const [name, setName]=useState("");
   const [email, setEmail]=useState("");
   const [message, setMessage]=useState("");
   const [disabledBtn,setDisabledBtn]=useState(false)



   const OnSubmitHandler=async(e)=>{
     e.preventDefault();
      setDisabledBtn(true)    
     try {
      await addDoc(collection(db, "contacts"),{
        name,
        email,
        message,
       })
       setName("");
       setEmail("");
       setMessage("");
       toast.success("message send");
       setDisabledBtn(false) 
     } catch (error) {
       toast.error("Message not send");
       console.log(error);
       setDisabledBtn(false) 
     }

     
   }


  return (
    <div id="contact">
        <section>
        <form onSubmit={OnSubmitHandler}>
            <h2>Conatct Me</h2>
            <input type="text"  placeholder='Enter your name' required  value={name}  onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Enter your email' required  value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder='Message...'   value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button  disabled={disabledBtn} className={disabledBtn ? "disabledBtn" : ""} type="submit" >Send</button>
        </form>
        </section>
        <aside>
            <img src={me} alt="Sunny Mallick" />
        </aside>
    </div>
  )
}

export default Contact