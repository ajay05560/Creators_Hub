import React from 'react'
import "./home_style.css"

export default function Home() {
    // window.onscroll = function() {scroll()}
    // const scroll = () =>{
    //     console.log("scroll");
    // }
  return (
    <div>
      <div className="main">

        <div className="section1">
            <div className="image_item" id="image_item1"></div>
            <p className="section1_text" >One Stop Solution Of All Problems Of Content Creators</p>
        
        </div>
        <div className="animation">
          <div className="img" id="img1"></div>
          <div className="img_error"></div>
          <div className="img_content"></div>
        </div>
        <div className="section1">
            <p className="section1_text" >Come In Touch With Sponsers And Monitize Your Content</p>
            <div className="image_item" id="image_item2"></div>
        
        </div>
        <div className="animation">
          <div className="img_sponser"></div>
          <div className="img" id="img2"></div>
        </div>
        <div className="section1">
            <div className="image_item" id="image_item3"></div>
            <p className="section1_text" >Meet People With Different Skills And TeamUp With Them</p>
        </div>
        <div className="animation">
          <div className="img" id="img3"></div>
          <div className="img" id="img4"></div>
        </div>
        <div className="tagline">So Are You Ready To Create With Us ?</div>
    </div>
      </div>
  )
}
