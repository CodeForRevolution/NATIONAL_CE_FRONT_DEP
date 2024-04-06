import React from "react";
import img from "../../static/img/News/flagHostingF.jpg";
import img2 from "../../static/img/News/studentFinal.jpg";
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
              <span className={style.setDates}>26</span>
              <span>Jan 2023</span>
            </div>
            <div className={style.comment}>14<i className="fa fa-comments"></i></div>
            <div className={style.message}><i class="fa-solid fa-file-lines"></i></div>
          </div>
          <div className={style.event}>
            <img src={img} alt="" />
            <div className={style.contentInfo}>
              <h2>Flag unfurled  Republic Day</h2>
              <div className={style.category}> <i className="fa fa-folder-open"></i> uncategorized</div>
              <span>At the National Convent of Education, the vibrant spirit of patriotism and academic excellence resonated as Javed Ali, the esteemed principal of the school, unfurled the flag with pride on the auspicious occasion of 26th January.</span>
              <button>Read More <i className="fa fa-chevron-circle-right"></i></button>
            </div>
          </div>
        </div>

        <div className={style.eventContainer}>
          <div className={style.eventInfo}>
            <div className={style.logo}></div>
            <div className={style.date}>
              <span className={style.setDates}>26</span>
              <span>Jan 2023</span>
            </div>
            <div className={style.comment}>19<i className="fa fa-comments"></i></div>
            <div className={style.message}><i class="fa-solid fa-file-lines"></i></div>
          </div>
          <div className={style.event}>
            <img src={img2} alt="" />
            <div className={style.contentInfo}>
              <h2>Republic Day 2023</h2>
              <div className={style.category}> <i className="fa fa-folder-open"></i> uncategorized</div>
              <span>In a heartwarming display of courage and patriotism,
A young student bravely stepped beyond Nursery and KG2,
With grace and fervor, they danced and spoke,
Their performance a tribute to the valorous Army of India.</span>
              <button>Read More <i className="fa fa-chevron-circle-right"></i></button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default New;
