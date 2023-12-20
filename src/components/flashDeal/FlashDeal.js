import React from "react";
import style from "./flashDeal.module.scss";
import cameraImg from "@/assets/imgs/camera2.jpg";
import shoppingCart from "@/assets/icons/shoppingCartMini.svg";
import heartIcon from "@/assets/icons/likeIcon.svg";
import zoomIcon from "@/assets/icons/zoomIcon.svg";

import Image from "next/image";

export default function FlashDeal({
  productImg,
  priceDiscounted = 29,
  title = "Sky Monkey 2020",
  cateText = "Camera,photo & video",
  price = "39.00",
  codeProduct = "E426L",
}) {
  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <label className={style.deal}>-{priceDiscounted}%</label>
        <div className={style.imgContainer}>
          <Image src={productImg || cameraImg} title="productImg" />
        </div>
        <div className={style.cate}>
          <p>{cateText}</p>
        </div>
        <h1 className={style.title}>{title}</h1>
        <div className={style.productInfo}>
          <p className={style.priceBox}>${price}</p>
          <div className={style.codeProduct}>
            <p className={style.subtext}>Code -</p>
            <p className={style.codeText}>{codeProduct}</p>
          </div>
        </div>

        <div className={style.controller}>
          <button className={style.addToCart}>
            <Image src={shoppingCart} alt="shoppingIcon" />
          </button>
          <button className={style.addToLike}>
            <Image src={heartIcon} alt="heartIcon" />
          </button>
          <button className={style.zoom}>
            <Image src={zoomIcon} alt="zoomIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}
