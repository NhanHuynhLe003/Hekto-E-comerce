import { Col, Row } from "antd";
import clsx from "clsx";
import Image from "next/image";
import { FaHeart, FaSearch, FaShoppingCart, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import style from "./shopCard.module.scss";
export default function ShopCard({
  nameSelector = "",
  name = "Accumsan tincidunt",
  price = 26,
  priceDiscount = 12,
  vote = 3,
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  src,
}) {
  const stateView = useSelector((state) => state.app[nameSelector]?.viewState);

  const countVote = [];
  for (let i = 0; i < 5; i++) {
    countVote[i] = i;
  }

  return (
    <div
      className={clsx(style.cardContainer, {
        [style.cardViewFirst]: stateView === 1,
      })}
    >
      <Row className={clsx(style.rowCard)}>
        <Col className={style.colLeft} span={24} md={stateView == 1 ? 24 : 6}>
          <Image
            src={src}
            alt={`img-${name}` || "None"}
            width={300}
            height={200}
          />
        </Col>
        <Col className={style.colRight} span={24} md={stateView == 1 ? 24 : 18}>
          <div className={style.wrapper}>
            <p className={style.title}>{name}</p>
            <ul className={style.colorBar}>
              <li className={style.yellow}></li>
              <li className={style.pink}></li>
              <li className={style.blue}></li>
            </ul>
          </div>
          <div className={style.infoContainer}>
            <div className={style.priceContainer}>
              <p className={style.priceAfter}>${priceDiscount.toFixed(2)}</p>
              <p className={style.priceBefore}>${price.toFixed(2)}</p>
            </div>
            <ul className={style.votes}>
              {countVote.map((num, index) => (
                <li key={num}>
                  {index < vote ? (
                    <FaStar fill="#FFC416" />
                  ) : (
                    <FaStar fill="#B2B2B2" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <p className={style.desc}>{desc}</p>
          <div className={style.controllerBar}>
            <button>
              <FaShoppingCart />
            </button>
            <button>
              <FaHeart />
            </button>
            <button>
              <FaSearch />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
