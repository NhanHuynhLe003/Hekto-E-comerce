import style from "./cateAds.module.scss";
import bgAds from "../../assets/imgs/bgAds.jpg";

export default function CateAds({
  bgSrc,
  title = "The pro stage for your home",
  price = "69.99",
}) {
  
  return (
    <div className={style.cardAds} style={{ background: `url(${bgAds.src})` }}>
      <h1 className={style.title}>{title}</h1>
      <br />
      <div className={style.priceBoard}>
        <span>from</span>
        <span className={style.priceSp}>
          <p className={style.price}>{price}</p>
          <p className={style.dollar}>$</p>
        </span>
      </div>
      <br/>
      <button className={style.shopBtn}>Shop Now</button>
    </div>
  );
}
