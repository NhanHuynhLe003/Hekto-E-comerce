import React from 'react'
import style from './roundProductCard.module.scss'
import Image from 'next/image'
import tallChair from '../../assets/svgs/gray_tall_wooden_chair.svg'
import Link from 'next/link'

export default function RoundProductCard({img, name,price}) {
  return (
    <div className={style.cardProductContainer}>
      <Link className={style.viewShopBtn} href='#'>view shop</Link>
      <div className={style.imgContainer}>
        <Image src={img || tallChair} width={50} height={50} alt={`anh-${name}` || 'None'}/>
      </div>
      <div className={style.cardInfo}>
        <p className={style.productName}>{name||"None"}</p>
        <p className={style.price}>${price.toFixed(2)||'00.00'}</p>
      </div>
    </div>
  )
}
