import React, { useState } from 'react'
import style from "./latestProduct.module.scss"
import CartProductLatest from '../components/CartProductLatest/CartProductLatest'
import yellowChair from "../assets/imgs/yellow_chair.jpg"
import blackChair from "../assets/imgs/image_32_chair.jpg"
import clsx from 'clsx'
const chairList = [
    {
      id: 1,
      name: "Chair A",
      imgSrc: yellowChair,
      priceBefore: 99.99,
      priceAfter: 79.99,
      cate:1
    },
    {
      id: 2,
      name: "Chair B",
      imgSrc: yellowChair,
      priceBefore: 149.99,
      priceAfter: 129.99,
      cate: 3
    },
    {
      id: 3,
      name: "Chair C",
      imgSrc: blackChair,
      priceBefore: 199.99,
      priceAfter: 179.99,
      cate:0
    },
    {
        id: 4,
        name: "Chair A",
        imgSrc: blackChair,
        priceBefore: 99.99,
        priceAfter: 79.99,
        cate:2
      },
      {
        id: 5,
        name: "Chair B",
        imgSrc: blackChair,
        priceBefore: 149.99,
        priceAfter: 129.99,
        cate:1
      },
      {
        id: 6,
        name: "Chair C",
        imgSrc: yellowChair,
        priceBefore: 199.99,
        priceAfter: 179.99,
        cate:3
      },
      {
        id: 7,
        name: "Chair A",
        imgSrc: blackChair,
        priceBefore: 99.99,
        priceAfter: 79.99,
        cate:2
      },
      {
        id: 8,
        name: "Chair B",
        imgSrc: blackChair,
        priceBefore: 149.99,
        priceAfter: 129.99,
        cate:1
      },
      {
        id: 9,
        name: "Chair C",
        imgSrc: yellowChair,
        priceBefore: 199.99,
        priceAfter: 179.99,
        cate: 0
      },

  ];
export default function LatestProduct() {

  const [cateSelect, setCateSelect] = useState(-1)
  return (
    <div className={style.latestProductWrapper}>
      <h2 className={style.headerLatestProdcut}>Latest Product</h2>
      <ul className={style.listCate}>
        <li onClick={() => cateSelect !== 0?setCateSelect(0):setCateSelect(-1)} className={clsx(style.cate1, {[style.cateSelected] : cateSelect==0})}>New Arrival</li>
        <li onClick={() => cateSelect !== 1?setCateSelect(1):setCateSelect(-1)} className={clsx(style.cate2, {[style.cateSelected] : cateSelect==1})}>Best Seller</li>
        <li onClick={() => cateSelect !== 2?setCateSelect(2):setCateSelect(-1)} className={clsx(style.cate3, {[style.cateSelected] : cateSelect==2})}>Featured</li>
        <li onClick={() => cateSelect !== 3?setCateSelect(3):setCateSelect(-1)} className={clsx(style.cate4, {[style.cateSelected] : cateSelect==3})}>Special Offer</li>
      </ul>

      <div className={style.productContainer}>
        {chairList ? chairList.map((chair,index) => {
          if(cateSelect === chair.cate){
            return <CartProductLatest key={chair.id} img={chair.imgSrc} id={chair.id} name={chair.name} price={chair.priceBefore} priceDiscounted={chair.priceAfter}/>
          } else if(cateSelect === -1){
            return <CartProductLatest key={chair.id} img={chair.imgSrc} id={chair.id} name={chair.name} price={chair.priceBefore} priceDiscounted={chair.priceAfter}/>
          }
        }) : <p>Loading . . .</p>}
        
      </div>
    </div>
  )
}
