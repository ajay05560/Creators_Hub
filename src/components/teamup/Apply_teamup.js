import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import "../sponsers/add_sponser.css"

export default function Apply_teamup() {
    const [Skill, setSkill] = useState()
    const [Audience, setAudience] = useState()
    const [Platform, setPlatform] = useState()
    const [Description, setDescription] = useState()
    const [Reason, setReason] = useState()
    const [Link, setLink] = useState()



    const email = localStorage.getItem("email")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")
    const teamup_email = localStorage.getItem("teamup_email")
    const teamup_name = localStorage.getItem("teamup_name")

    const Login_redirect = () => {
        window.location.reload()
        window.location.pathname = "./profile"
    }

    const collection_ref = collection(db,"teamup_apply")
    const Sumbit =  async() =>{
        if (Skill !== "" & Audience !== "" & Platform !== ""  & Description!=="" & Reason!=="" & Link!=="") {
            await addDoc(collection_ref, {Skill,Audience,Description,Platform,Reason,Link, teamup_email, teamup_name, name,email})
            window.location.reload()
            window.location.pathname('./teamup')
        }else{
            alert("all fields are mandatory")
        }
    }
  return (
    <div className='Add'>
        <div className="Container">
                <h1 className="maintitle">TeamUp With {teamup_name} </h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        <label>
                            <h5 className="input_label" >Your Skill :</h5>
                            <input className="input_form" type="text" placeholder="Your Skill"  onChange={(event)=>{setSkill(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Connection Profile :</h5>
                            <input className="input_form" type="text" placeholder="Your Social Media Profile Via Which You Want To Connect With Other Creator"  onChange={(event)=>{setLink(event.target.value)}} />
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
                            <h5 className="input_label" >Description Of Your Work :</h5>
                            <textarea name="" id="" onChange={(event)=>{setDescription(event.target.value)}} className='textarea'></textarea>
                        </label>
                        <label>
                            <h5 className="input_label" >Why You Want To TeamUp :</h5>
                            <textarea name="" id="" onChange={(event)=>{setReason(event.target.value)}} className='textarea'></textarea>
                        </label>
                        
       
                </div>
            {authenticated? <button id="submit-btn" onClick={Sumbit} name="action">Submit
            </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
            </button>}
</div>
    </div>
  )
}
