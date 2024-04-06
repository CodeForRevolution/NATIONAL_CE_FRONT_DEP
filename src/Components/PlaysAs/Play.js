import React from "react";
import style from "./Play.module.scss";
import img from "../../static/img/book2.webp";

const Play = () => {
  return (
    <div className={style.play}>
      <div className={style.left}>
        <div className={style.leftside}>
          <h2>Play As Your learn</h2>
          <div className={style.one}>
            <div className={style.miniHeader}>
              <div className={style.logo}>
                <i class="fa-solid fa-trophy"></i>
              </div>
              <h3>Enligh Summer camp</h3>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nam explicabo dolore beatae inventore omnis quos impedit commodi,
              vitae temporibus?
            </span>
          </div>
          <div className={style.one}>
            <div className={style.miniHeader}>
              <div className={style.logo}>
                <i class="fa-solid fa-person-snowboarding"></i>
              </div>
              <h3>Sport Camp</h3>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nam explicabo dolore beatae inventore omnis quos impedit commodi,
              vitae temporibus?
            </span>
          </div>
          <div className={style.one}>
            <div className={style.miniHeader}>
              <div className={style.logo}>
                <i class="fa-solid fa-palette"></i>
              </div>
              <h3>Drawing & Painting</h3>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nam explicabo dolore beatae inventore omnis quos impedit commodi,
              vitae temporibus?
            </span>
          </div>
        </div>

        <div className={style.rightSide}>
          <div className={style.one}>
            <div className={style.miniHeader}>
              <div className={style.logo}>
                <i class="fa-solid fa-person-swimming"></i>
              </div>
              <h3>Swiming Camp</h3>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nam explicabo dolore beatae inventore omnis quos impedit commodi,
              vitae temporibus?
            </span>
          </div>
          <div className={style.one}>
            <div className={style.miniHeader}>
              <div className={style.logo}>
                <i class="fa-solid fa-person-drowning"></i>
              </div>
              <h3>Dancing</h3>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nam explicabo dolore beatae inventore omnis quos impedit commodi,
              vitae temporibus?
            </span>
          </div>
          <div className={style.one}>
            <div className={style.miniHeader}>
              <div className={style.logo}>
                <i class="fa-solid fa-music"></i>
              </div>
              <h3>Singin</h3>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              nam explicabo dolore beatae inventore omnis quos impedit commodi,
              vitae temporibus?
            </span>
          </div>
        </div>
      </div>

      <div className={style.right}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Play;
