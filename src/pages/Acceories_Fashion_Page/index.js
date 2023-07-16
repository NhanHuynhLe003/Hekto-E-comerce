import React from 'react'
import style from './Acceories_Fashion_Page.module.scss'
import Layout from '../layouts/Layout'
import Link from 'next/link'
import Acceories_Fashion_Filter from '../components/AcceoriesFashion/Acceories_Fashion_Filter'
import Acceories_Fashion_List from '../components/AcceoriesFashion/Acceories_Fashion_List'
export default function Acceories_Fashion_Page() {
  return (
    <Layout title="Ecommerce Acceories & Fashion">
        <div id={style.EcommerceAcceoriesFashion}>
            <section className={style.headerSection}>
              <div className={style.container}>
                <h1>Shop Grid Default</h1>
                <div className={style.naviList}>
                  <Link href="/">Home</Link>
                  <Link href="#">.Page</Link>
                  <Link className={style.curPage} href="#">.Shop Grid Default</Link>
                </div>
              </div>
            </section>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <section className={style.product_list}>
              <Acceories_Fashion_Filter/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <Acceories_Fashion_List/>
            </section>
        </div>
    </Layout>
  )
}
