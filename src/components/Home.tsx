import React from 'react'
import image1 from "../multimedia/image (1).jpeg"
import image2 from "../multimedia/image (2).jpeg"
import image3 from "../multimedia/image (3).jpeg"
import image4 from "../multimedia/image (4).jpeg"
import image5 from "../multimedia/image (5).jpeg"
import image6 from "../multimedia/image (6).jpeg"
import image7 from "../multimedia/image (7).jpeg"
import "./CSS/home.css"

export default function Home() {
  return (
    <div className='home'>
        <h1 className='titleHome'>TITULO</h1>
        <div className='containerImg'>
            <img src={image1} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image2} alt="" />
            <img src={image7} alt="" />
        </div>
    </div>
  )
}
