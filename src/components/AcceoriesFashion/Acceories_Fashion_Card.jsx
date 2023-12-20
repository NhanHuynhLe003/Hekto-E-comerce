// Import necessary dependencies and styles
import Image from "next/image";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import tmpImg from "@/assets/imgs/yellow_chair.jpg";
import style from "./AcceoriesFashionCard.module.scss";
import { useRouter } from "next/router";
/**
 * Functional component representing a card for displaying accessory or fashion items.
 * @param {Object} props - Component props.
 * @param {string} props.type - Type of card layout ("list" or 1).
 * @param {string} props.img - Image source for the accessory or fashion item.
 * @param {number} props.price - Price of the item.
 * @param {number} props.priceDiscount - Discounted price of the item.
 * @param {string} props.name - Name of the item.
 * @param {string} props.widthCard - Set width for card, default 20%
 * @param {string} props.idProduct - set Product for card and go to product detail when click
 * @returns {JSX.Element} - Rendered component.
 */
export default function Acceories_Fashion_Card({
  type = "list",
  img = tmpImg,
  price = 0,
  priceDiscount = 0,
  name = "Apple Watch",
  widthCard = "100%",
  idProduct = "0001",
}) {
  const router = useRouter();

  function handleNavigate(productId) {
    router.push(`/products/${productId}`);
  }
  // Render the component with dynamic styles based on the card type
  return (
    <div
      onClick={() => handleNavigate(idProduct)}
      className={
        type === "list" ? style.Acceorie_Card_List : style.Acceorie_Card_Grid
      }
      style={{ width: widthCard }}
      title="See more detail"
    >
      <div className={style.imgContainer}>
        {/* Render control buttons only for type 1 cards */}
        {type === "grid" ? (
          <ul className={style.controllerBar}>
            <li className={style.btn1}>
              <FaShoppingCart />
            </li>
            <li className={style.btn2}>
              <FaSearch />
            </li>
            <li className={style.btn3}>
              <FaHeart />
            </li>
          </ul>
        ) : (
          <></> // Empty fragment for horizontal type card
        )}
        {/* Render the image using the Next.js Image component */}
        <Image
          src={img}
          width={0}
          height={0}
          alt={`img-${name}` || "NONE"}
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </div>
      {/* Render additional information about the product */}
      <div className={style.infoCard}>
        <p className={style.nameProduct}>{name}</p>
        {/* Render color options as buttons */}
        <ul className={style.corlorBar}>
          <li className={style.colorYellow}>
            <button> </button>
          </li>
          <li className={style.colorPink}>
            <button> </button>
          </li>
          <li className={style.colorPurple}>
            <button> </button>
          </li>
        </ul>
        {/* Render pricing information */}
        <div className={style.priceInfo}>
          <p className={style.priceDiscount}>${priceDiscount.toFixed(2)}</p>
          <p className={style.price}>${price.toFixed(2)}</p>
        </div>
        <br />
      </div>
    </div>
  );
}
