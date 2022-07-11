import React from "react"
import "./header.scss"
import { KeyboardArrowDown } from "@material-ui/icons"
import { useRef } from "react"
import { useEffect } from "react";
import { init } from "ityped";


function Header() {


  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer',"Engineer" ] ,
    })
  },[])

  return (

    <div className='header' id="header">
      

      <div className="img-container" id="img-container">

        <img clasName="img-1" src={"assets/my_photo.png"} alt="" />

      </div>

      <div className="right-container" id="right-container">
        <h1> Hello Welcome ,  </h1>
        <h2> I'm Abdulsamet Aybaz</h2>
        <h3> Freelance <span ref={textRef}></span></h3>
      </div>

      <div className="scrool"></div>

      <KeyboardArrowDown className="arrow"></KeyboardArrowDown>
  
    </div>
  )
}


export default Header