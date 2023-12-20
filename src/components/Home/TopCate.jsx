import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import style from "./topCate.module.scss";
import RoundProductCard from "@/components/roundProductCard/RoundProductCard";
import whiteChair from "@/assets/svgs/white-mini-lcw.svg";
import lcwchair2 from "@/assets/svgs/gray_tall_wooden_chair.svg";
const topCateProducts = [
  {
    id: 1,
    name: "Wooden Chair",
    price: 56,
    src: whiteChair,
  },
  {
    id: 2,
    name: "lcw Chair",
    price: 46,
    src: lcwchair2,
  },
  {
    id: 3,
    name: "lcw Chair 02",
    price: 84,
    src: whiteChair,
  },
  {
    id: 4,
    name: "lcw Chair 03",
    price: 74,
    src: lcwchair2,
  },
  {
    id: 5,
    name: "Wooden Chair 04",
    price: 32,
    src: whiteChair,
  },
  {
    id: 6,
    name: "lcw Chair 07",
    price: 46,
    src: lcwchair2,
  },
  {
    id: 7,
    name: "lcw Chair 08",
    price: 84,
    src: whiteChair,
  },
  {
    id: 8,
    name: "lcw Chair 09",
    price: 49,
    src: lcwchair2,
  },
];
export default function TopCate({}) {
  return (
    <div className={style.topCategoryWrapper}>
      <Swiper
        modules={[Pagination]}
        wrapperClass={style.wrapperSlider}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{
          clickable: true,
          bulletActiveClass: style.activeBtnPagi,
          bulletClass: style.btnPagi,
        }}
      >
        {topCateProducts ? (
          topCateProducts.map((product, index) => (
            <SwiperSlide key={product.id + index}>
              <div className={style.cardTopCate}>
                <RoundProductCard
                  img={product.src}
                  name={product.name}
                  price={product.price}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </Swiper>
    </div>
  );
}
