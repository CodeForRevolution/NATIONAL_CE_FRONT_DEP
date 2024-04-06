import React from 'react'
import style from "./Sdisplay.module.scss"

const Sdisplay = () => {
  return (
    <div className={style.sDisplay}>


<div className={style.right}>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6N-uOyoRq4DpzP7g2yNtgBrba-T-I22CQ4fLkwzaJw&s" alt="" />
  <span>National Convent</span>
</div>

<div className={style.left}>
    <div>
        <div> <i className="fa-regular fa-envelope"></i>nationalconventofeducation@gmail.com</div>
        <div><i className="fa-solid fa-mobile-screen-button"></i>Number:8856369962</div>
    </div>
</div>
    </div>
  )
}

export default Sdisplay
