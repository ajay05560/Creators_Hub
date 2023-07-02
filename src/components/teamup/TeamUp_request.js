import React from 'react'
import "../profile/profile_content.css"
import "../sponsers/sponser_style.css"
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../config'
import { Link } from 'react-router-dom'

export default function TeamUp_request() {
    let name  = localStorage.getItem("name")
    let email  = localStorage.getItem("email")
    let authenticated = localStorage.getItem("Authenticated")

    const [list, setlist] = useState([])
    const collection_ref = collection(db,"teamup_apply")

    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()

    })
  return (
    <div className='main'>
        <div className="Sponsers">
            <h1 className='sponser_text'>People Who Want To TeamUp With You : </h1>
            <div className="sponsers">


        {list.map((post) =>{
          if (post.teamup_email == email) {
            return <div className="post">
                    <div className="brand">
                      <h2>{post.name}</h2>
                      <Link className='connect_btn' to={post.Link}>Connect</Link>
                    </div>
                    <div className="details">
                      <p>Skills Of {post.name} : {post.Skills}</p>
                      <p>Preferred Audience Of {post.name} : {post.Audience}</p>
                      <p>Preferred Platform Of {post.name} : {post.Platform}</p>
                      <p>Why {post.name} Want To TeamUp With You : {post.Platform}</p>
                      <p>Description Of {post.name}'s Work : {post.Description}</p>

                    </div>
                    
                </div>
            
          }
            })}
        
        </div>
        </div>
    </div>
  )
}
