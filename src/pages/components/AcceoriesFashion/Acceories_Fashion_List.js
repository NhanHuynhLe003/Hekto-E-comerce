import React from 'react'
import Acceories_Fashion_Card from './Acceories_Fashion_Card'
import {useSelector} from 'react-redux'
import clsx from 'clsx'
import style from './Acceories_Fashion_List.module.scss'
import product1 from '../../assets/svgs/acceories_product_1.svg'
import product2 from '../../assets/svgs/acceories_product_2.svg'
import product3 from '../../assets/svgs/acceories_product_3.svg'
import product4 from '../../assets/svgs/acceories_product_4.svg'
import product5 from '../../assets/svgs/acceories_product_5.svg'

const listProduct = [
  {
    id: 1,
    name: 'Ael elit euismod',
    price: 42,
    priceDiscount: 26,
    img: product1,
    star: 1,
    sold: 10
  },
  {
    id: 2,
    name: 'Mel elit euismod',
    price: 28,
    priceDiscount: 19,
    img: product2,
    star: 1,
    sold: 18
  },
  {
    id: 3,
    name: 'Tel elit euismod 3',
    price: 24,
    priceDiscount: 18,
    img: product3,
    star: 3,
    sold: 29

  },
  {
    id: 4,
    name: 'Fel elit euismod 5',
    price: 55,
    priceDiscount: 45,
    img: product4,
    star: 5,
    sold: 11

  },
  {
    id: 5,
    name: 'Del elit euismod',
    price: 46,
    priceDiscount: 32,
    img: product5,
    star: 2,
    sold: 5

  },
  {
    id: 6,
    name: 'Del elit euismod 6',
    price: 36,
    priceDiscount: 17,
    img: product1,
    star: 4,
    sold: 36

  },
  {
    id: 7,
    name: 'Bel elit euismod 7',
    price: 26,
    priceDiscount: 42,
    img: product2,
    star: 3,
    sold: 49

  },
  {
    id: 8,
    name: 'Hel elit euismod 8',
    price: 26,
    priceDiscount: 42,
    img: product3,
    star: 1,
    sold: 17
    
  },
  {
    id: 9,
    name: 'Nel elit euismod 9',
    price: 26,
    priceDiscount: 42,
    img: product4,
    star: 5,
    sold: 12

  },
  {
    id: 10,
    name: 'Yel elit euismod 10',
    price: 26,
    priceDiscount: 15,
    img: product5,
    star: 2,
    sold: 10

  },
  {
    id: 11,
    name: 'Wel elit euismod 11',
    price: 26,
    priceDiscount: 19,
    img: product1,
    star: 4,
    sold: 32

  }
]
export default function Acceories_Fashion_List() {
  const quantityProductPerPage= useSelector((state) => state.app.acceoriesShop.perpage)
  const methodSelect = useSelector((state) => state.app.acceoriesShop.sortBy)
  const searchResSelector = useSelector((state) => state.app.acceoriesShop.searchResult)
  const viewState = useSelector((state) => state.app.acceoriesShop.viewState)
  return (
    <div className={clsx(style.listProduct, {
      [style.typeListView] : viewState == 2
    })}>
      {listProduct && listProduct.sort((a,b) => {
        switch(methodSelect){
          case 'favourite':
            return b.star - a.star
          case 'Hot_Selling':
            return b.sold - a.sold
          case 'price':
            return a.priceDiscount - b.priceDiscount
          default:
            return a.id - b.id
        }
      })
      .filter((product,index) => product.name.toLowerCase().includes(searchResSelector.toLowerCase()))
      .map((product,index) => {
        if(index < quantityProductPerPage){
          return <Acceories_Fashion_Card type={viewState} key={index} img={product.img} name={product.name} price={product.price} priceDiscount={product.priceDiscount}/>
        }
      })
      }
    </div>
  )
}
