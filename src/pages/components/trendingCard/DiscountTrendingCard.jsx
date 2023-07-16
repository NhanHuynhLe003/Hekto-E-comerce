import React from 'react'
import style from './discountTrendingCard.module.scss'
import Link from 'next/link'
import darkClockProduct from '../../assets/svgs/dark_clock.svg'
import Image from 'next/image'
export default function DiscountTrendingCard({title, img, bgColor="shade_color"}) {
  return (
    <div className={style.discountTrending} style={bgColor === 'shade_color' ? {background: '#EEEFFB'} : bgColor === 'skin_color' ? {background: "#FFF6FB"} : {background: 'transparent'}}>
      <p className={style.title}>23% off in all products</p>
      <Link href="#" className={style.buyBtn}>Shop Now</Link>
      <div className={style.imgContainer}>
        <Image src={img?img:darkClockProduct} alt="product_img" />
      </div>
    </div>
  )
}
