import React from "react";
import style from "./Staff.module.scss";
import staff1 from '../../static/img/our-staff/staff1.jpg'
import staff2 from '../../static/img/our-staff/staff2.jpg'
import staff3 from '../../static/img/our-staff/staff3.jpg'
import staff4 from '../../static/img/our-staff/staff4.jpg'
import staff5 from "./staff1.jpg"

const Staff = () => {
  return (
    <div className={style.staff}>
<h2>Our staff member</h2>
      <div className={style.container}>

      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={staff1} alt="" />
        </div>
        <h3>Javed ali khan</h3>
        <span>Principal / Director</span>
        <p>
        Javed Ali Khan is a visionary leader dedicated to nurturing a positive and inspiring learning environment. His commitment to excellence and passion for education make him a guiding force for both students and staff.
        </p>
      </div>
      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={staff2} alt="" />
        </div>
        <h3>Karuna meshram</h3>
        <span>Head of Teachers</span>
        <p>
         
Karuna Meshram, the finest teacher at National Convent, displays remarkable grace in handling children even in challenging situations. Her teaching style is truly awesome, creating a positive and engaging learning experience for all
        </p>
      </div>
      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={require('../../static/img/our-staff/staff3.jpg')} alt="" />
        </div>
        <h3>Nasira Khan</h3>
        <span>Voice principal</span>
        <p>
         
Karuna Meshram, the finest teacher at National Convent, displays remarkable grace in handling children even in challenging situations. Her teaching style is truly awesome, creating a positive and engaging learning experience for all
        </p>
      </div>
      <div className={style.staffContainer}>
        <div className={style.img}>
          <img src={require('../../static/img/our-staff/staff4.jpg')} alt="" />
        </div>
        <h3>Sumaiya khan</h3>
        <span> Supervisor</span>
        <p>
       
Karuna Meshram, the finest teacher at National Convent, displays remarkable grace in handling children even in challenging situations. Her teaching style is truly awesome, creating a positive and engaging learning experience for all
        </p>
      </div>

      </div>
      
    </div>
  );
};

export default Staff;
