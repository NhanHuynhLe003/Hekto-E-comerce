import React from 'react'
import style from './smallTrendingCard.module.scss'
import Image from 'next/image'
import woodenChair from '../../assets/imgs/ghe_go_banh.jpg'
export default function SmallTrendingCard({id,name, img, price, discountPrice}) {
  return (
    <div className={style.smallTrendingCard}>
      <div className={style.imgContainer}>
        <Image width={70} height={70} src={img ?  img: woodenChair} alt={name? "picture-"+name : "None"}/>
      </div>
      <div className={style.right}>
        <p className={style.nameProduct}>{name}</p>
        <div className={style.priceInfo}>

          <div className={style.priceDiscounted}>${discountPrice?discountPrice.toFixed(2):"None"}</div>
          <div className={style.price}>${price?price.toFixed(2):"None"}</div>
        </div>
      </div>
    </div>
  )
}
