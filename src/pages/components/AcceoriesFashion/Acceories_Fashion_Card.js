import React from 'react'
import style from './AcceoriesFashionCard.module.scss'
import Image from 'next/image'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
export default function Acceories_Fashion_Card({type = 'list',img, price = 0, priceDiscount = 0, name= 'Apple Watch'}) {
  return (
    <div className={type === 1 ? style.Acceorie_Card : style.Acceorie_Card_List}>
      <div className={style.imgContainer}>
        {type === 1 ? <ul className={style.controllerBar}>
          <li className={style.btn1}><FaShoppingCart/></li>
          <li className={style.btn2}><FaSearch/></li>
          <li className={style.btn3}><FaHeart/></li>
        </ul> : <></>}
        <Image src={img} width={270} height={360} alt={`img-${name}`||'NONE'} ></Image>
      </div>
      <div className={style.infoCard}>
        <p className={style.nameProduct}>{name}</p>
        <ul className={style.corlorBar}>
            <li className={style.colorYellow}><button> </button></li>
            <li className={style.colorPink}><button> </button></li>
            <li className={style.colorPurple}><button> </button></li>
        </ul>
        <div className={style.priceInfo}>
          <p className={style.priceDiscount}>${priceDiscount.toFixed(2)}</p>
          <p className={style.price}>${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
