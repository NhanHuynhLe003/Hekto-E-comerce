import React, { useEffect } from "react";
import style from "./listProduct.module.scss";
import ShopCard from "@/components/ShopList/ShopCard";
import {
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  productImg7,
} from "../../assets/productImg";
import { useSelector } from "react-redux";
const listProduct = [
  {
    id: 1,
    name: "Ael elit euismod",
    price: 42,
    priceDiscount: 26,
    img: productImg1,
    star: 1,
    sold: 10,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Gucci",
  },
  {
    id: 2,
    name: "Mel elit euismod",
    price: 28,
    priceDiscount: 19,
    img: productImg2,
    star: 1,
    sold: 18,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Gucci",
  },
  {
    id: 3,
    name: "Tel elit euismod 3",
    price: 24,
    priceDiscount: 18,
    img: productImg3,
    star: 3,
    sold: 29,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Prada",
  },
  {
    id: 4,
    name: "Fel elit euismod 5",
    price: 55,
    priceDiscount: 45,
    img: productImg4,
    star: 5,
    sold: 11,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Channel",
  },
  {
    id: 5,
    name: "Del elit euismod",
    price: 46,
    priceDiscount: 32,
    img: productImg5,
    star: 2,
    sold: 5,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Hermes",
  },
  {
    id: 6,
    name: "Del elit euismod 6",
    price: 36,
    priceDiscount: 17,
    img: productImg6,
    star: 4,
    sold: 36,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Versace",
  },
  {
    id: 7,
    name: "Bel elit euismod 7",
    price: 26,
    priceDiscount: 42,
    img: productImg7,
    star: 3,
    sold: 49,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Gucci",
  },
  {
    id: 8,
    name: "Hel elit euismod 8",
    price: 26,
    priceDiscount: 42,
    img: productImg4,
    star: 1,
    sold: 17,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Prada",
  },
  {
    id: 9,
    name: "Nel elit euismod 9",
    price: 26,
    priceDiscount: 42,
    img: productImg3,
    star: 5,
    sold: 12,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Channel",
  },
  {
    id: 10,
    name: "Yel elit euismod 10",
    price: 26,
    priceDiscount: 15,
    img: productImg2,
    star: 2,
    sold: 10,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Gucci",
  },
  {
    id: 11,
    name: "Wel elit euismod 11",
    price: 26,
    priceDiscount: 19,
    img: productImg1,
    star: 4,
    sold: 32,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi labore adipisci! Magnam iure voluptatum alias labore accusantium consequatur sed.`,
    brand: "Hermes",
  },
];

export default function ListProductSideBar() {
  const methodSelect = useSelector((state) => state.app.shopLeftSideBar.sortBy);
  const searchResSelector = useSelector(
    (state) => state.app.shopLeftSideBar.searchResult
  );
  const quantityProductPerPage = useSelector(
    (state) => state.app.shopLeftSideBar.perpage
  );
  const listBrandSelector = useSelector(
    (state) => state.app.shopLeftSideBar.listProductBrand
  );

  return (
    <div className={style.productContainer}>
      {listProduct ? (
        listProduct
          .filter((product, index) => {
            if (Object.values(listBrandSelector).includes(true)) {
              return listBrandSelector[product.brand] === true;
            }
            return product;
          })
          .filter((product, index) =>
            product.name.toLowerCase().includes(searchResSelector.toLowerCase())
          )
          .sort((a, b) => {
            switch (methodSelect) {
              case "favourite":
                return b.star - a.star;
              case "Hot_Selling":
                return b.sold - a.sold;
              case "price":
                return a.priceDiscount - b.priceDiscount;
              default:
                return a.id - b.id;
            }
          })
          .map((product, index) =>
            index < quantityProductPerPage ? (
              <ShopCard
                nameSelector="shopLeftSideBar"
                key={product.id}
                src={product.img}
                desc={product.desc}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}
                vote={product.star}
              />
            ) : (
              <></>
            )
          )
      ) : (
        <p>Loading . . .</p>
      )}
    </div>
  );
}
