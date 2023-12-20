import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import style from "./cartProduct.module.scss";

export default function CartProduct({
  id = 1,
  img,
  name = "Cantilever chair",
  price = "$42.00",
}) {
  const listColor = ["86", "309", "345"];
  const [color, setColor] = useState(-1);
  const [isZoom, setIsZoom] = useState(false);
  return (
    <div className={style.cartProduct}>
      <Link
        href="#"
        style={{ opacity: isZoom ? 0 : 1 }}
        className={style.viewBtn}
      >
        View Details
      </Link>
      <div className={style.controlBarProduct}>
        <button className={style.btnCart}>
          <FaShoppingCart color="#2F1AC4" />
        </button>
        <button className={style.btnHeart}>
          <FaRegHeart color="#1389FF" />
        </button>
        <button onClick={() => setIsZoom(!isZoom)} className={style.btnZoom}>
          <FaSearchPlus color="#1389FF" />
        </button>
      </div>
      <div className={style.productImg}>
        <Image
          style={{
            filter: color !== -1 ? `hue-rotate(${listColor[color]}deg)` : "",
            zIndex: 1,
            transform: isZoom ? "scale(1.2)" : "",
          }}
          width={178}
          height={178}
          alt={`anh-san-pham-${name}`}
          src={
            img
              ? img
              : "https://th.bing.com/th/id/OIP.iPqMzBIGGuiDnaM5iAd3XQHaGy?pid=ImgDet&rs=1"
          }
        />
      </div>
      <div className={style.infoProduct}>
        <p className={style.nameProduct}>{name}</p>
        <div className={style.colors}>
          <button
            onClick={() => {
              color !== 0 ? setColor(0) : setColor(-1);
            }}
            className={clsx(style.color1, { [style.colorSelect]: color === 0 })}
          >
            {" "}
          </button>
          <button
            onClick={() => {
              color !== 1 ? setColor(1) : setColor(-1);
            }}
            className={clsx(style.color2, { [style.colorSelect]: color === 1 })}
          >
            {" "}
          </button>
          <button
            onClick={() => {
              color !== 2 ? setColor(2) : setColor(-1);
            }}
            className={clsx(style.color3, { [style.colorSelect]: color === 2 })}
          >
            {" "}
          </button>
        </div>
        <p className={style.codeProduct}>Y5{id}</p>
        <p className={style.priceProduct}>{price}</p>
      </div>
    </div>
  );
}
