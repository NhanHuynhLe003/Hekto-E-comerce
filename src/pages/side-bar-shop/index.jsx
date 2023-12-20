import Acceories_Fashion_Filter from "@/components/AcceoriesFashion/Acceories_Fashion_Filter";
import FilterBar from "@/components/shopSideBar/FilterBar";
import ListProductSideBar from "@/components/shopSideBar/ListProductSideBar";
import Layout from "@/layouts/Layout";
import { Col, Row } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import style from "./shopLeft.module.scss";

export default function ShopLeftSidebar() {
  const quantityProductPerPage = useSelector(
    (state) => state.app.shopLeftSideBar.perpage
  );
  const viewState = useSelector((state) => state.app.shopLeftSideBar.viewState);
  return (
    <Layout title="shop left sidebar">
      <div id={style.ShopLeftSidebar}>
        <section className={style.headerSection}>
          <div className={style.container}>
            <h1>Shop Left Sidebar</h1>
            <div className={style.naviList}>
              <Link href="/">Home</Link>
              <Link href="#">.Page</Link>
              <Link className={style.curPage} href="#">
                .Shop Left Sidebar
              </Link>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className={style.product_list}>
          <Acceories_Fashion_Filter
            page={"shopLeftSideBar"}
            perpageSelector={quantityProductPerPage}
            viewSelector={viewState}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col span={4} className={style.leftSideBar}>
              <FilterBar />
            </Col>
            <Col span={20} className={style.rightSideBar}>
              <ListProductSideBar />
            </Col>
          </Row>
        </section>
      </div>
    </Layout>
  );
}
