import React from "react";
import style from "./singleTrendingCard.module.scss";
import Image from "next/image";
import whiteChair from "@/assets/imgs/cantilier_white_chair.jpg";

export default function SingleTredingCard({
  name = "Cantilever chair",
  img,
  price = 42,
  priceDiscount = 26,
}) {
  return (
    <div className={style.singleTrendingCard}>
      <div className={style.imgContainer}>
        <Image src={whiteChair} width={250} height={250} alt="product" />
      </div>
      <div className={style.cardInfo}>
        <p className={style.nameProduct}>{name}</p>
        <div className={style.priceInfo}>
          <p className={style.priceDiscount}>${priceDiscount.toFixed(2)}</p>
          <p className={style.price}>${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
