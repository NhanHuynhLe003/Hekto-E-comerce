import React from "react";
import Image from "next/image";
import style from "./electricMatePrice.module.scss";
import goldenStar from "@/assets/icons/golden_star.svg";
import blackStar from "@/assets/icons/dark_star.svg";
import bgImg from "@/assets/imgs/Frame 4.jpg";

export default function ElectricMatePrice({
  producImg,
  name = "Wood Made Bags",
  price = 32,
  rate = 4,
}) {
  let ratings = [1, 2, 3, 4, 5];
  return (
    <div className={style.cardContainer}>
      <div className={style.frame}>
        <Image
          src={producImg || bgImg}
          className={style.Img}
          alt="frame"
        ></Image>
      </div>
      <div>
        <p className={style.title}>{name}</p>
        <p className={style.price}>${Number(price).toFixed(2)}</p>
        <div className={style.voteList}>
          {ratings.map((rating, index) => {
            return rating <= rate ? (
              <Image src={goldenStar} alt="voted" />
            ) : (
              <Image src={blackStar} alt="un_vote" />
            );
          })}
        </div>
      </div>
    </div>
  );
}
