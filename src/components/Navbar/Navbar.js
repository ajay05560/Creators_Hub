import React from 'react'
import { Link } from 'react-router-dom'
import './navbar_style.css'

export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="title">Creator's Hub</div>
            <div className="items">
                <Link className='nav_links' to="/">HOME</Link>
                <Link className='nav_links' to="/sponser">SPONSERS</Link>
                <Link className='nav_links' to="/teamup">TEAMUP</Link>
                <Link className='nav_links' to="/profile">PROFILE</Link>
            </div>
        </div>
    </div>
  )
}
