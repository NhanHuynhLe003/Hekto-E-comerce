import React from "react";
import style from "./cartShopex.module.scss";
import Image from "next/image";
import freeDelivery from "@/assets/svgs/free-delivery.svg";
export default function CartShopex({
  serviceName = "service Name",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  img,
}) {
  return (
    <div className={style.shopexCart}>
      <div className={style.imgContainer}>
        <Image
          src={img ? img : freeDelivery}
          alt="free-delivery-service"
          width={65}
          height={65}
        />
      </div>
      <p className={style.name}>{serviceName}</p>
      <p className={style.desc}>{desc}</p>
    </div>
  );
}
