import React from "react";
import style from "./fashion-page.module.scss";
import Layout from "../layouts/Layout";
import Link from "next/link";
import Acceories_Fashion_Filter from "@/components/AcceoriesFashion/Acceories_Fashion_Filter";
import Acceories_Fashion_List from "@/components/AcceoriesFashion/Acceories_Fashion_List";

import { useSelector } from "react-redux";

export default function Acceories_Fashion_Page() {
  const quantityProductPerPage = useSelector(
    (state) => state.app.shopGridDefault.perpage
  );
  const viewState = useSelector((state) => state.app.shopGridDefault.viewState);

  return (
    <Layout title="Shop Grid Default">
      <div id={style.EcommerceAcceoriesFashion}>
        <section className={style.headerSection}>
          <div className={style.container}>
            <h1>Shop Grid Default</h1>
            <div className={style.naviList}>
              <Link href="/">Home</Link>
              <Link href="#">.Page</Link>
              <Link className={style.curPage} href="#">
                .Shop Grid Default
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
            page={"shopGridDefault"}
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
          <Acceories_Fashion_List />
        </section>
      </div>
    </Layout>
  );
}
