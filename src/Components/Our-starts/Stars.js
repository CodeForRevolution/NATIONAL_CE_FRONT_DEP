import React from "react";
import style from "./Stars.module.scss"
import img from "../../static/img/our-stars/star1.jpg"
import img1 from "../../static/img/our-stars/star2.jpg"
import img2 from "../../static/img/our-stars/star3.jpg"
import img3 from "../../static/img/our-stars/star4.jpg"

const Stars = () => {
  return (
    <div className={style.staff}>
<h2>Our stars</h2>
      <div className={style.container}>

      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={img} alt="" />
        </div>
        <h3>Nursery tooper</h3>
        <span>Alfiya khan</span>
        <p>
          Id modi odio
          vel facere molestias quam earum nesciunt cumque qui assumenda!
        </p>
      </div>
      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={img2} alt="" />
        </div>
        <h3>KG I topper</h3>
        <span>Tamanna siddique</span>
        <p>
          modi odio
          vel facere molestias quam earum nesciunt cumque qui assumenda!
        </p>
      </div>
      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={img3} alt="" />
        </div>
        <h3>KG II toppers</h3>
        <span>Arhaan sheikh</span>
        <p>
         g elit. Id modi odio
          vel facere molestias quam earum nesciunt cumque qui assumenda!
        </p>
      </div>
      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={img1} alt="" />
        </div>
        <h3>Fastest Learner</h3>
        <span>mohd Ali</span>
        <p>
         sng elit. Id modi odio
          vel facere molestias quam earum nesciunt cumque qui assumenda!
        </p>
      </div>

      </div>
      
    </div>
  );
};

export default Stars;
