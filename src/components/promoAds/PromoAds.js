import { Col, Row } from "antd";
import style from "./promoAds.module.scss";
import Image from "next/image";
import Link from "next/link";
import AppleWatch from "@/assets/svgs/AppleWatch.svg";

/**
  Default variant: pink || blue || options
 */

export default function PromoAds({
  imgProduct,
  variant = "pink",
  title = "50% off in Apple Watch",
}) {
  return (
    <div
      className={style.promoContainer}
      style={
        variant === "pink"
          ? { background: "var(--promo-pink)" }
          : variant === "blue"
          ? { background: "var(--promo-blue)" }
          : { background: variant }
      }
    >
      <Row className={style.wrapper}>
        <Col span={12} className={style.colLeft}>
          <h1 className={style.title}>{title}</h1>
          <Link href="#" className={style.navigateBtn}>
            Shop Now
          </Link>
        </Col>
        <Col span={12} className={style.colRight}>
          <Image src={AppleWatch || imgProduct} alt="product-ads" />
        </Col>
      </Row>
    </div>
  );
}
