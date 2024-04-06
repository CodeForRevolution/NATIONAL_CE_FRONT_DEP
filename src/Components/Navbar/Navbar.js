import React, { useState } from 'react'
import style from "./Navbar.module.scss"


const Navbar = () => {
    const[isToggled,setIsToggle]=useState(false);

    const handleToggle=()=>{     
   setIsToggle(isToggled?false:true);
   const toggleEl=document.getElementById('left');
   console.log(toggleEl);
    isToggled?toggleEl.style.transform='translateX(-100%)':toggleEl.style.transform='translateX(0%)'
    }

  return (
    <div className={style.Navbar}>
        <div className={style.left} id='left'>
            <ul>
                <li>HOME</li>
                <li>ABOUT-US</li>
                <li>OUR-STARS</li>
                <li>OUR-STAFF</li>
                <li>SCHOOL-NEWS</li>
                <li>EVENTS</li>
                <li>CONTACT-US</li>            
            </ul>
        </div>
  
  <div className={style.toggle} onClick={()=>{handleToggle()}}>
 {isToggled?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
  </div>

        <div className={style.right}>      
            <ul>
                <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@NationalConventOfEducation/videos"><i className="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar