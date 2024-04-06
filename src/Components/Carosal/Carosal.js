import React from "react";
import style from "./Carosal.module.scss";
import img1 from "../../static/img/News/speechS.jpg";
import img2 from "../../static/img/News/dancingS.jpg";
import img3 from "../../static/img/carosal/3.jpg";
import img4 from "../../static/img/News/speach2.jpg";

const Carosal = () => {

var i=0;

    setInterval(() => {
        var El=document.getElementById('slider')
        console.log(El)
        El.style.transform=`translateX(${-100*i}%)` 
        if(i==2){
            i=-1;
        }   
i++   
    },5000);
  return (

    <div className={style.carosal}>
 <div className={style.parent}>

<div className={style.childcontainer} id="slider">

  <div className={style.child}>
      <img src={img1} alt="" />
  </div>
  <div className={style.child}>
      <img src={img2} alt="" />
  </div>
  <div className={style.child}>
      <img src={img4} alt="" />
  </div>

</div>
</div>

    </div>
     );
};

export default Carosal;
