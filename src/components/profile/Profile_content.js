import React from 'react'
import "./profile_content.css"
import {signOut} from 'firebase/auth'
import {auth} from '../../config'
import "../sponsers/sponser_style.css"

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../config'

export default function Profile_content() {
    let name  = localStorage.getItem("name")
    let email  = localStorage.getItem("email")
    let authenticated = localStorage.getItem("Authenticated")

    const [list, setlist] = useState([])
    const [list_sec, setlist_sec] = useState([])
    const collection_ref = collection(db,"sponsers_applied")

    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()

    })
 
  
  const signUserOut = () =>{
    signOut(auth).then(()=>{
    localStorage.clear()
    authenticated = false
    window.location.reload()
})} 
  return (
    <div className='profile_content'>
        <h1 className='creator'>Hi Creator 👋️</h1>
        <h2 className='creator_details'>Name : {name}</h2>
        <h2 className='creator_details'>Your Email : {email}</h2>
        <div className="Sponsers">
            <h1 className='sponser_text'>People Who Applied For Sponsership Oppurtunities Created By You : </h1>
            <div className="sponsers">


        {list.map((post) =>{
          if (post.brand_email == email) {
            return <div className="post">
                    <div className="brand">
                      <h2>{post.brand_name}</h2>
                    </div>
                    <div className="details">
                      <p>Applicant : {post.name}</p>
                      <p>Email Of Applicant: {post.email}</p>
                      <p><a href={post.Link}>Preferred Platform's Account Link</a></p>
                    </div>
                    
                </div>
            
          }
            })}
        
        </div>
        </div>
        <button onClick={()=>{window.location.pathname = "./teamup-request"}} className="team_request">TEAMUP REQUESTS</button>
        <div className="danger">
        <button className='danger_btn' onClick={signUserOut}>Log Out</button>
      </div>
    </div>
  )
}
