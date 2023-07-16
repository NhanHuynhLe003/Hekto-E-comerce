import React from 'react'
import style from "./shopexOffer.module.scss"
import CartShopex from '../components/cartShopex/CartShopex'
import cashback from '../assets/svgs/cashback.svg'
import premiumQuality from '../assets/svgs/premium-quality.svg'
import alwaySupport from '../assets/svgs/24-hours-support.svg'
import freeDelivery from '../assets/svgs/free-delivery.svg'


const services = [
  {
    id:1,
    src: freeDelivery,
    name: 'Free Delivery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  },
  {
    id:2,
    src: cashback,
    name: 'Cash Back',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  },
  {
    id:3,
    src: premiumQuality,
    name: 'Premium Quality',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  },
  {
    id:4,
    src: alwaySupport,
    name: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
  },
]
export default function ShopexOffer() {
  return (

    <div className={style.shopexContainer}>
      {services && services.map((service,index) => <CartShopex img={service.src} desc={service.description} serviceName={service.name} key={service.id}/>)}
    </div>
  )
}
