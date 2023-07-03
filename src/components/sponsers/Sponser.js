import React from 'react'
import { Link } from 'react-router-dom'
import "./sponser_style.css"

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../config'

export default function Sponser() {
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"sponsers")
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
        <Link to="/add-sponser"><button className="add" id="addhelp">+</button></Link>
        <div className="sponsers">


        {list.map((post) =>{
            return <div className="post">
                    <div className="brand">
                          <h2>{post.Brand}</h2>
                          <button onClick={()=>{
                            localStorage.setItem("brand_email",post.email)
                            localStorage.setItem("brand_name",post.Brand)
                            window.location.pathname = "./apply-sponser"
                          }} className='apply_btn'>APPLY</button>
                    </div>
                    <div className="details">
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

