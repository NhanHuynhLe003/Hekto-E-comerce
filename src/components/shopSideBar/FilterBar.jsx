import { Checkbox } from "antd";
import style from "./filterBar.module.scss";
import { FaSearch, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addToListProductBrand } from "@/pages/redux/reducer";
import { useDispatch } from "react-redux";

export default function FilterBar() {
  const dispatch = useDispatch();
  const [brandProducts, setBrandProducts] = useState({
    Gucci: false,
    Channel: false,
    Hermes: false,
    Prada: false,
    Versace: false,
  });
  function handleCheckbox(e) {
    const { name, checked } = e.target;
    setBrandProducts((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }
  useEffect(() => {
    const payload = {
      page: "shopLeftSideBar",
      data: brandProducts,
    };

    dispatch(addToListProductBrand(payload));
  }, [brandProducts]);
  return (
    <div className={style.filterSideBar}>
      <div className={style.productBrandGroup}>
        <h3 className={style.title}>Product Brand</h3>
        <div className={style.checkList}>
          <Checkbox
            value={brandProducts.Gucci}
            onChange={(e) => handleCheckbox(e)}
            name="Gucci"
            className={style.checkbox}
          >
            Gucci
          </Checkbox>
          <Checkbox
            value={brandProducts.Channel}
            onChange={(e) => handleCheckbox(e)}
            name="Channel"
            className={style.checkbox}
          >
            Channel
          </Checkbox>
          <Checkbox
            value={brandProducts.Hermes}
            onChange={(e) => handleCheckbox(e)}
            name="Hermes"
            className={style.checkbox}
          >
            Hermes
          </Checkbox>
          <Checkbox
            value={brandProducts.Prada}
            onChange={(e) => handleCheckbox(e)}
            name="Prada"
            className={style.checkbox}
          >
            Prada
          </Checkbox>
          <Checkbox
            value={brandProducts.Versace}
            onChange={(e) => handleCheckbox(e)}
            name="Versace"
            className={style.checkbox}
          >
            Versace
          </Checkbox>
        </div>
      </div>

      <div className={style.discountOfferGroup}>
        <h3 className={style.title}>Discount Offer</h3>
        <div className={style.checkList}>
          <Checkbox>20% Cashback</Checkbox>
          <Checkbox>5% Cashback Offer</Checkbox>
          <Checkbox>25% Discount Offer</Checkbox>
        </div>
      </div>

      <div className={style.ratingItemGroup}>
        <h3 className={style.title}>Rating Item</h3>
        <div className={style.checkList}>
          <Checkbox>
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
          </Checkbox>
          <Checkbox>
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#B2B2B2" />
          </Checkbox>
          <Checkbox>
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#B2B2B2" />
            <FaStar color="#B2B2B2" />
          </Checkbox>
          <Checkbox>
            <FaStar color="#FFC107" />
            <FaStar color="#FFC107" />
            <FaStar color="#B2B2B2" />
            <FaStar color="#B2B2B2" />
            <FaStar color="#B2B2B2" />
          </Checkbox>
          <Checkbox>
            <FaStar color="#FFC107" />
            <FaStar color="#B2B2B2" />
            <FaStar color="#B2B2B2" />
            <FaStar color="#B2B2B2" />
            <FaStar color="#B2B2B2" />
          </Checkbox>
        </div>
      </div>

      <div className={style.categoriesGroup}>
        <h3 className={style.title}>Categories</h3>
        <div className={style.checkList}>
          <Checkbox>Watches</Checkbox>
          <Checkbox>Bags</Checkbox>
          <Checkbox>Electronics</Checkbox>
          <Checkbox>Clothings</Checkbox>
          <Checkbox>cosmetic</Checkbox>
        </div>
      </div>

      <div className={style.priceFilterGroup}>
        <h3 className={style.title}>Price Filter</h3>
        <div className={style.checkList}>
          <Checkbox>$0.00 - $150.00</Checkbox>
          <Checkbox>$150.00 - $350.00</Checkbox>
          <Checkbox>$150.00 - $504.00</Checkbox>
          <Checkbox>$450.00 +</Checkbox>
        </div>
        <div className={style.searchByPrice}>
          <input type="text" placeholder="$20.000 - $50.000" />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
