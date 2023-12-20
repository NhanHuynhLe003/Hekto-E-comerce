import product1 from "@/assets/svgs/acceories_product_1.svg";
import product2 from "@/assets/svgs/acceories_product_2.svg";
import product3 from "@/assets/svgs/acceories_product_3.svg";
import product4 from "@/assets/svgs/acceories_product_4.svg";
import product5 from "@/assets/svgs/acceories_product_5.svg";
import Acceories_Fashion_Card from "@/components/AcceoriesFashion/Acceories_Fashion_Card";
import Acceories_Fashion_Filter from "@/components/AcceoriesFashion/Acceories_Fashion_Filter";
import Layout from "@/layouts/Layout";
import style from "@/styles/scss/shop-category.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

const listProduct = [
  {
    id: "0001",
    name: "Ael elit euismod",
    price: 42,
    priceDiscount: 26,
    img: product1,
    star: 1,
    sold: 10,
  },
  {
    id: "0002",
    name: "Mel elit euismod",
    price: 28,
    priceDiscount: 19,
    img: product2,
    star: 1,
    sold: 18,
  },
  {
    id: "0003",
    name: "Tel elit euismod 3",
    price: 24,
    priceDiscount: 18,
    img: product3,
    star: 3,
    sold: 29,
  },
  {
    id: "0004",
    name: "Fel elit euismod 5",
    price: 55,
    priceDiscount: 45,
    img: product4,
    star: 5,
    sold: 11,
  },
  {
    id: "0005",
    name: "Del elit euismod",
    price: 46,
    priceDiscount: 32,
    img: product5,
    star: 2,
    sold: 5,
  },
  {
    id: "0006",
    name: "Del elit euismod 6",
    price: 36,
    priceDiscount: 17,
    img: product1,
    star: 4,
    sold: 36,
  },
  {
    id: "0007",
    name: "Bel elit euismod 7",
    price: 26,
    priceDiscount: 42,
    img: product2,
    star: 3,
    sold: 49,
  },
  {
    id: "0008",
    name: "Hel elit euismod 8",
    price: 26,
    priceDiscount: 42,
    img: product3,
    star: 1,
    sold: 17,
  },
  {
    id: "0009",
    name: "Nel elit euismod 9",
    price: 26,
    priceDiscount: 42,
    img: product4,
    star: 5,
    sold: 12,
  },
  {
    id: "0010",
    name: "Yel elit euismod 10",
    price: 26,
    priceDiscount: 15,
    img: product5,
    star: 2,
    sold: 10,
  },
  {
    id: "0011",
    name: "Wel elit euismod 11",
    price: 26,
    priceDiscount: 19,
    img: product1,
    star: 4,
    sold: 32,
  },
];
export default function ShopCategory() {
  const quantityProductPerPage = useSelector(
    (state) => state.app.shopCategory.perpage
  );
  const methodSelect = useSelector((state) => state.app.shopCategory.sortBy);
  const searchResSelector = useSelector(
    (state) => state.app.shopCategory.searchResult
  );
  const viewState = useSelector((state) => state.app.shopCategory.viewState);

  return (
    <Layout>
      <div
        className={clsx(style.listProduct, {
          [style.typeListView]: viewState == 2,
        })}
      >
        <br />
        <Acceories_Fashion_Filter
          page={1}
          perpageSelector={20}
          viewSelector={1}
        ></Acceories_Fashion_Filter>
        <br />

        <div className={style.cardProductContainer}>
          {listProduct &&
            listProduct
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
              .filter((product, index) =>
                product.name
                  .toLowerCase()
                  .includes(searchResSelector?.toLowerCase())
              )
              .map((product, index) => {
                if (index < quantityProductPerPage) {
                  return (
                    <div key={product.id + index}>
                      <Acceories_Fashion_Card
                        type={viewState}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        idProduct={product.id}
                      />
                    </div>
                  );
                }
              })}
        </div>
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}
