import React from "react";
import { Row, Col, Input, Button } from "antd";
import style from "./footer.module.scss";
import Link from "next/link";
import Blog from "@/pages/blogPage/Blog";
import BrowseShop from "@/pages/browseShopPage/BrowseShop";
import CategoryPage from "@/pages/categoryPage/CategoryPage";
import PrebuildPage from "@/pages/preBuildPage/PrebuildPage";
import VisualComposer from "@/pages/visualComposerPage/VisualComposer";
import WooEcomerce from "@/pages/wooEcomercePage/WooEcomerce";
// import Group from 'antd/es/input/Group'
import clsx from "clsx";
const cateList = [
  { url: "/laptop-pc", pages: "Laptops & Computers" },
  { url: "/cam-and-photo", pages: "Cameras & Photography" },
  { url: "/phone-and-tablet", pages: "Smart Phones & Tablets" },
  { url: "/games", pages: "Video Games & Consoles" },
  { url: "/heaphones", pages: "Waterproof Headphones" },
];

const customerCareList = [
  { url: "/my-account", pages: "My Account" },
  { url: "/discount", pages: "Discount" },
  { url: "/return", pages: "Returns" },
  { url: "/order-history", pages: "Orders History" },
  { url: "/order-tracking", pages: "Order Tracking" },
];

const pagesList = [
  {url: "/blogPage/Blog", page:<Blog/>, name: 'blog'},
  {url: "/browseShopPage/BrowseShop", page:<BrowseShop/>, name: 'browse the shop'},
  {url: "/categoryPage/CategoryPage", page:<CategoryPage/>, name: 'Category'},
  {url: "/preBuildPage/PrebuildPage ", page:<PrebuildPage/>, name: 'Pre-Built Pages'},
  {url: "/visualComposerPage/VisualComposer", page:<VisualComposer/>, name: 'Visual Composer Elements'},
  {url: "/wooEcomercePage/WooEcomerce", page:<WooEcomerce/>, name: 'WooCommerce Pages'},
]


export default function Footer() {
  return (
    <footer>
      <div className={style.containerFooter}>
        <Row>
          <Col className={style.colFirst} span={24} md={{ span: 6 }}>
            <h2>Hekto</h2>
            <div className={style.groupInput}>
              <Input type="email" placeholder="Enter Email Address" />
              <Button>Sign Up</Button>
            </div>
            <p className={style.contact}>Contact Info</p>
            <p className={style.address}>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </Col>
          <Col className={style.colSecond} span={8} md={{ span: 5, offset: 1 }}>
            <h4>Catagories</h4>
            <ul className={clsx(style.listPageFooter)}>
              {cateList.map((cate,index) => {
                return <li><Link href={cate.url}>{cate.pages}</Link></li>
              })}
            </ul>
          </Col>
          <Col className={style.colThird} span={8} md={{ span: 5, offset: 1 }}>
            <h4>Customer Care</h4>
            <ul className={clsx(style.listPageFooter)}>
              {customerCareList.map((custCare,index) => {
                return <li><Link href={custCare.url}>{custCare.pages}</Link></li>
              })}
            </ul>
          </Col>
          <Col className={style.colFourth} span={8} md={{ span: 5, offset: 1 }}>
            <h4>pages</h4>
            <ul className={clsx(style.listPageFooter)}>
              {pagesList.map((page,index) => {
                return <li><Link href={page.url}>{page.name}</Link></li>
              })}
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
