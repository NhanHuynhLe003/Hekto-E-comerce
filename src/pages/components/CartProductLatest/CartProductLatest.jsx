import React from 'react'
import style from './cartProductLatest.module.scss'
import Image from 'next/image'
import saleLabel from '../../assets/svgs/sale_label.svg'
import { FaRegHeart, FaSearchPlus, FaShoppingCart } from 'react-icons/fa'
import clsx from 'clsx'
export default function CartProductLatest({isSale=false, img,id,name, price, priceDiscounted}) {
  return (
    <div className={style.cartLatestProduct}>
        {isSale && <Image className={style.saleLabel} src={saleLabel} alt="sale_label"/>}
        <div className={style.controllerBtn}>
            <btn className={clsx(style.controlBtn,style.cart)}><FaShoppingCart/></btn>
            <btn className={clsx(style.controlBtn,style.likeHeart)}><FaRegHeart/></btn>
            <btn className={clsx(style.controlBtn,style.zoom)}><FaSearchPlus/></btn>
        </div>
        <div className={style.cartContainerImg}>
            <Image width={250} height={250} alt={`anh-${name}`} src={img}/>
        </div>
        <div className={style.cartInfo}>
            <p className={style.productName}>{name}</p>
            <div className={style.priceContainer}>
                <p className={style.priceBefore}>${price}</p>
                <p className={style.priceDiscount}>${priceDiscounted}</p>
            </div>
        </div>
    </div>
  )
}
