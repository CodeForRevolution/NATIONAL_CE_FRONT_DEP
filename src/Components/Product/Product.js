import React from "react";
import style from "./Product.module.scss";
import  img from '../../static/img/products/product1.jpg'
import  img1 from '../../static/img/products/product2.jpg'
import  img2 from '../../static/img/products/product3.jpg'
const Product = () => {
  return (
    <div className={style.product}>
      <h2>Our Recent products</h2>
      <div className={style.container}>

        <div className={style.eachProduct}>
          <img src={img} alt="" />
          <div className={style.desc}>
            <span>style The </span> <span>&#8377</span>
          </div>
        </div>

        <div className={style.eachProduct}>
          <img src={img1} alt="" />
          <div className={style.desc}>
            <span>style The </span> <span>&#8377</span>
          </div>
        </div>

        <div className={style.eachProduct}>
          <img src={img2} alt="" />
          <div className={style.desc}>
            <span>style The </span> <span>&#8377</span>
          </div>
        </div>

        <div className={style.eachProduct}>
          <img src={img} alt="" />
          <div className={style.desc}>
            <span>style The </span> <span>&#8377</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
