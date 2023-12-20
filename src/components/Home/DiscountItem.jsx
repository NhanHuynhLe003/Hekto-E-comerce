import React, { useState } from "react";
import style from "./discountItem.module.scss";
import DiscountItemProduct from "@/components/discountItem/DiscountItem";
import pinkSofa from "@/assets/svgs/sofa_promotional.svg";
import blueSofa from "@/assets/svgs/feature-sofa-blue.svg";
import brownSofa from "@/assets/svgs/brown-sofa.svg";
const listProductDiscount = [
  {
    id: 1,
    imgSrc: brownSofa,
    discountTitle: "Sale!",
    name: "Product 1",
    description: "This is the description for Product 1.",
    standards: [
      "Material expose like metals",
      "Clear lines and geometric figures",
      "Simple neutral colours.",
    ],
    cate: 1,
  },
  {
    id: 2,
    imgSrc: blueSofa,
    discountTitle: "Special Offer",
    name: "Product 2",
    description: "This is the description for Product 2.",
    standards: [
      "Material expose like metals",
      "Clear lines and geometric figures",
      "Simple neutral colours.",
    ],
    cate: 2,
  },
  {
    id: 3,
    imgSrc: pinkSofa,
    discountTitle: "",
    name: "Product 3",
    description: "This is the description for Product 3.",
    standards: [
      "Material expose like metals",
      "Clear lines and geometric figures",
      "Simple neutral colours.",
    ],
    cate: 3,
  },
];

export default function DiscountItem() {
  const [selectCate, setSelectCate] = useState(1);
  return (
    <div className={style.discountItemContainer}>
      <ul className={style.cateBar}>
        <li>
          <button
            className={selectCate == 1 && style.selectCate}
            onClick={() => setSelectCate(1)}
          >
            Wood Chair
          </button>
        </li>
        <li>
          <button
            className={selectCate == 2 ? style.selectCate : ""}
            onClick={() => setSelectCate(2)}
          >
            Plastic Chair
          </button>
        </li>
        <li>
          <button
            className={selectCate == 3 && style.selectCate}
            onClick={() => setSelectCate(3)}
          >
            Sofa Colletion
          </button>
        </li>
      </ul>

      {listProductDiscount ? (
        listProductDiscount.map((product, index) => {
          if (product.cate === selectCate) {
            return (
              <DiscountItemProduct
                id={product.id}
                description={product.description}
                discountTitle={product.discountTitle}
                name={product.name}
                standards={product.standards}
                src={product.imgSrc}
                key={product.id}
              />
            );
          }
        })
      ) : (
        <p>Loading . . .</p>
      )}
    </div>
  );
}
