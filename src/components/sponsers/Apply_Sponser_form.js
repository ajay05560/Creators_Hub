import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import "./add_sponser.css"

export default function Apply_Sponser_form() {
    const [Link, setLink] = useState()


    const email = localStorage.getItem("email")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")
    const brand_email = localStorage.getItem("brand_email")
    const brand_name = localStorage.getItem("brand_name")

    const Login_redirect = () => {
        window.location.reload()
        window.location.pathname = "./profile"
    }

    const collection_ref = collection(db,"sponsers_applied")
    const Sumbit =  async() =>{
        if (Link=="") {
            alert("all fields are mandatory")
            
        }else{
            await addDoc(collection_ref, {Link,brand_email, brand_name, name,email})
            window.location.reload()
            window.location.pathname('./sponser')
            localStorage.removeItem("brand_email")
            localStorage.removeItem("brand_name")
        }
    }
  return (
    <div className='Add'>
        <div className="Container">
                <h1 className="maintitle">Fill The Following Data Carefully</h1>
                <div className="inputs_parent">
                        <label>
                            <h5 className="input_label" >Account Link Of Platform Preferred By Brand :</h5>
                            <input className="input_form" type="text" placeholder="Account Link Of Platform Preferred By Brand"  onChange={(event)=>{setLink(event.target.value)}} />
                        </label>
                        
                        
       
                </div>
            {authenticated? <button id="submit-btn" onClick={Sumbit} name="action">Submit
            </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
            </button>}
</div>
    </div>
  )
}
