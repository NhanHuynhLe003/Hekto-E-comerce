import { Button, Col, Row } from "antd";
import React from "react";
import style from "./discountStandard.module.scss";
import Image from "next/image";
import sofa from "@/assets/imgs/sofa_advertise_2.jpg";

const standardProductProp = [
  "All frames constructed with hardwood solids and laminates",
  "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
  "Arms, backs and seats are structurally reinforced",
];
export default function DiscountStandard({
  productImgSrc,
  title = "Unique Features Of leatest & Trending Poducts",
  standardList,
  nameProduct = "B&B Italian Sofa ",
  price = "$32.00",
}) {
  let listStandard = standardList ? standardList : standardProductProp;
  return (
    <div className={style.DiscountStandard}>
      <Row>
        <Col className={style.leftAdvertise} span={24} md={{ span: 10 }}>
          <Image
            title="product_advertise"
            src={sofa || productImgSrc}
            alt="product advertise"
          />
        </Col>
        <Col className={style.rightAdvertise} span={24} md={{ span: 10 }}>
          <h2>{title}</h2>
          <ul>
            {listStandard.map((standard, index) => {
              return (
                <li key={standard}>
                  <span
                    className={style.dot}
                    style={
                      index % 3 === 0
                        ? { background: "#F52B70" }
                        : index % 3 === 1
                        ? { background: "#2B2BF5" }
                        : { background: "#2BF5CC" }
                    }
                  >
                    {" "}
                  </span>
                  <p>{standard}</p>
                </li>
              );
            })}
          </ul>
          <div className={style.controller}>
            <Button className={style.btnAddToCart}>Add To Cart</Button>
            <span className={style.informationProduct}>
              <p className={style.nameProduct}>{nameProduct}</p>
              <p className={style.price}>{price}</p>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
