import React from "react";
import img from "../../static/img/News/1.jpg";
import style from "./News.module.scss";

const New = () => {
  return (
    <div className={style.news}>
      <h2>Recent Events</h2>

      <div className={style.container}>

        <div className={style.eventContainer}>
          <div className={style.eventInfo}>
            <div className={style.logo}></div>
            <div className={style.date}>
              <span className={style.setDates}>5</span>
              <span>sep 2023</span>
            </div>
            <div className={style.comment}>14<i className="fa fa-comments"></i></div>
            <div className={style.message}><i class="fa-solid fa-file-lines"></i></div>
          </div>
          <div className={style.event}>
            <img src={img} alt="" />
            <div className={style.contentInfo}>
              <h2>Teacher Day celebration</h2>
              <div className={style.category}> <i className="fa fa-folder-open"></i> uncategorized</div>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, nulla. Quia, eius facere eveniet laudantium autem accusamus natus ullam similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odit.</span>
              <button>Read More <i className="fa fa-chevron-circle-right"></i></button>
            </div>
          </div>
        </div>

        <div className={style.eventContainer}>
          <div className={style.eventInfo}>
            <div className={style.logo}></div>
            <div className={style.date}>
              <span className={style.setDates}>15</span>
              <span>Aug 2023</span>
            </div>
            <div className={style.comment}>19<i className="fa fa-comments"></i></div>
            <div className={style.message}><i class="fa-solid fa-file-lines"></i></div>
          </div>
          <div className={style.event}>
            <img src={img} alt="" />
            <div className={style.contentInfo}>
              <h2>15 August Celebration</h2>
              <div className={style.category}> <i className="fa fa-folder-open"></i> uncategorized</div>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, nulla. Quia, eius facere eveniet laudantium autem accusamus natus ullam similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odit.</span>
              <button>Read More <i className="fa fa-chevron-circle-right"></i></button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default New;
