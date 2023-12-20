import React from "react";
import Layout from "./Layout";
import style from "./AcceorieLayout.module.scss";
import Link from "next/link";
export default function AcceorieLayout({
  children,
  title = "Hekto Shop",
  direct1 = "Home",
  direct2 = ".Page",
  direct3 = ".Shop",
}) {
  return (
    <Layout title={title}>
      <div className={style.EcommerceAcceories}>
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
        <section className={style.container}>{children}</section>
      </div>
    </Layout>
  );
}
