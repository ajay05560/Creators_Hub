import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import "./add_sponser.css"

export default function Add_sponser() {
    const [Brand, setBrand] = useState()
    const [Audience, setAudience] = useState()
    const [Platform, setPlatform] = useState()
    const [Description, setDescription] = useState()



    const email = localStorage.getItem("email")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")

    const Login_redirect = () => {
        window.location.reload()
        window.location.pathname = "./profile"
    }

    const collection_ref = collection(db,"sponsers")
    const Sumbit =  async() =>{
        if (Brand !== "" & Audience !== "" & Platform !== ""  & Description!=="") {
            await addDoc(collection_ref, {Brand,Audience,Description,Platform, name,email})
            window.location.reload()
            window.location.pathname('./sponser')
        }else{
            alert("all fields are mandatory")
        }
    }
  return (
    <div className='Add'>
        <div className="Container">
                <h1 className="maintitle">Want To Advertise Your Product By A Creator ?</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        <label>
                            <h5 className="input_label" >Brand Name :</h5>
                            <input className="input_form" type="text" placeholder="Your Brand Name"  onChange={(event)=>{setBrand(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Targeted Audience :</h5>
                            <input className="input_form" type="text" placeholder="Your Targeted Audience"  onChange={(event)=>{setAudience(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Platform  :</h5>
                            <input className="input_form" type="text" placeholder="Platform On Which You Want To Advertise"  onChange={(event)=>{setPlatform(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Description Of Work :</h5>
                            <textarea name="" id="" onChange={(event)=>{setDescription(event.target.value)}} className='textarea'></textarea>
                        </label>
                        
       
                </div>
            {authenticated? <button id="submit-btn" onClick={Sumbit} name="action">Submit
            </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
            </button>}
</div>
    </div>
  )
}
