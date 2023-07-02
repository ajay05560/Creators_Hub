import React from 'react'
import { Link } from 'react-router-dom'
import "../sponsers/add_sponser.css"

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../config'

export default function Teamup() {
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"teamup")
    let authenticated = localStorage.getItem("Authenticated")
    let email = ""
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })

  return (
    <div className='main'>
        <Link to="/add-teamup"><button className="add" id="addhelp">+</button></Link>
        <div className="sponsers">


        {list.map((post) =>{
            return <div className="post">
                    <div className="brand">
                          <h2>{post.name}</h2>
                          <button onClick={()=>{
                            localStorage.setItem("teamup_email",post.email)
                            localStorage.setItem("teamup_name",post.name)
                            window.location.pathname = "./apply-teamup"
                          }} className='apply_btn'>TEAMUP</button>
                    </div>
                    <div className="details">
                      <p>Skill : {post.Skill}</p>
                      <p>Targeted Audience : {post.Audience}</p>
                      <p>Preferred Platform : {post.Platform}</p>
                      <p>Description : {post.Description}</p>
                    </div>
                    
                </div>
            })}
        
        </div>
    </div>
  )
}

