import React from "react";
import style from "./featureProduct.module.scss";
import CartProduct from "../components/CartProduct/CartProduct";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function FeatureProductSection() {
  const listProduct = [
    {
      id: "23201",
      img: "https://th.bing.com/th/id/R.13cc9d5ca22b8ed873037925d84a36c9?rik=2aorBnlX%2bfm96Q&riu=http%3a%2f%2fofficialpsds.com%2fimageview%2fr6%2f4w%2fr64wl1_small.png%3f1590653969&ehk=hHOqH8H7zw5ehoxtIk4Y4Z48%2bRNEMfAYfH%2b%2b%2fembnxU%3d&risl=&pid=ImgRaw&r=0",
      name: "Ghế ngồi thư giãn",
      price: 1500000,
    },
    {
      id: "23202",
      img: "https://i.pinimg.com/736x/06/a2/04/06a2043d8e09fc7c894ea3a468f1484e.jpg",
      name: "Ghế văn phòng cao cấp",
      price: 2500000,
    },
    {
      id: "23203",
      img: "https://th.bing.com/th/id/OIP.2QHw7QiaBmyP0jKfxoabQAHaHa?pid=ImgDet&rs=1",
      name: "Ghế gỗ tự nhiên",
      price: 1800000,
    },
    {
      id: "23204",
      img: "https://th.bing.com/th/id/OIP.XhJL2vXJz7AYxoidmjOa-wHaHa?pid=ImgDet&rs=1",
      name: "Ghế bành",
      price: 1200000,
    },
    {
      id: "23205",
      img: "https://i.pinimg.com/originals/c6/c4/70/c6c4700c0c6dbcfc8efb3c93acbdab41.jpg",
      name: "Ghế sofa",
      price: 2000000,
    },
    {
      id: "23206",
      img: "https://th.bing.com/th/id/OIP.iPqMzBIGGuiDnaM5iAd3XQHaGy?pid=ImgDet&rs=1",
      name: "Ghế băng",
      price: 900000,
    },
    {
      id: "23207",
      img: "https://th.bing.com/th/id/OIP.iPqMzBIGGuiDnaM5iAd3XQHaGy?pid=ImgDet&rs=1",
      name: "Ghế xoay văn phòng",
      price: 1800000,
    },
    {
      id: "23208",
      img: "https://th.bing.com/th/id/OIP.m7ElkSTZc4_mqlYdsdb4bAHaHa?pid=ImgDet&rs=1",
      name: "Ghế gấp",
      price: 600000,
    },
    {
      id: "23209",
      img: "https://th.bing.com/th/id/OIP.DtP6Ap-dfqM_hO_N7_ybAQHaDE?w=325&h=145&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Ghế tình yêu",
      price: 800000,
    },
    {
      id: "23210",
      img: "https://th.bing.com/th/id/R.f9ac911cf8f56d278cee849af4bee710?rik=rGx1%2fad5tF%2faKA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-bWkXvK38hY0%2fVKZYjs2QKYI%2fAAAAAAAAAv8%2fPvooIEAF7CA%2fs1600%2fGhe-quy-GQ04B-M11.jpg&ehk=3khQzhCeDra8kFS%2f6SN4RMR2zDW3XM1eG55yQ0DT3cg%3d&risl=&pid=ImgRaw&r=0",
      name: "Ghế thư viện",
      price: 1500000,
    },
    {
      id: "23211",
      img: "https://th.bing.com/th/id/OIP.iPqMzBIGGuiDnaM5iAd3XQHaGy?pid=ImgDet&rs=1",
      name: "Ghế bar",
      price: 1000000,
    },
    {
      id: "23212",
      img: "https://th.bing.com/th/id/OIP.iPqMzBIGGuiDnaM5iAd3XQHaGy?pid=ImgDet&rs=1",
      name: "Ghế tĩnh điện",
      price: 3500000,
    },
    {
      id: "23213",
      img: "https://th.bing.com/th/id/OIP.iPqMzBIGGuiDnaM5iAd3XQHaGy?pid=ImgDet&rs=1",
      name: "Ghế mây tre",
      price: 900000,
    },
    {
      id: "23214",
      img: "https://th.bing.com/th/id/OIP.iPqMzBIGGuiDnaM5iAd3XQHaGy?pid=ImgDet&rs=1",
      name: "Ghế học sinh",
      price: 500000,
    }
  ];

  return <div className={style.featureProduct}>
    
    {<Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{
        clickable: true,
        bulletActiveClass: style.bulletActive,
        bulletClass: style.bulletNoneActive,
        horizontalClass: style.horizontalPagi
      }}
      modules={[Pagination]}
      className={style.swiperContainer}
      
    >
      {listProduct.map((product,index) => 
        <SwiperSlide key={product.id+index}>
            <CartProduct id={product.id} img={product.img} name={product.name} price={product.price}/>
        </SwiperSlide>
      )}
    </Swiper>}
    
  </div>;
}
