import style from "@/components/Home/home.module.scss";
import Image from "next/image";

import Layout from "@/layouts/Layout";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/navigation';
import { Button, Col, Row } from "antd";
import Link from "next/link";

import blueSofa from "@/assets/svgs/feature-sofa-blue.svg";
import lighter from "@/assets/svgs/lighter.svg";
import sofaPromotion from "@/assets/svgs/sofa_promotional.svg";
import tortuga from "@/assets/svgs/tortuga-chair.svg";
import DiscountItem from "@/components/Home/DiscountItem";
import FeatureProductSection from "@/components/Home/FeatureProductSection";
import LatestBlog from "@/components/Home/LatestBlog";
import LatestProduct from "@/components/Home/LatestProduct";
import ShopexOffer from "@/components/Home/ShopexOffer";
import TopCate from "@/components/Home/TopCate";
import DiscountStandard from "@/components/discountStandardItem/DiscountStandard";
import DiscountTrendingCard from "@/components/trendingCard/DiscountTrendingCard";
import SingleTredingCard from "@/components/trendingCard/SingleTredingCard";
import SmallTrendingCard from "@/components/trendingCard/SmallTrendingCard";

const advertises = [
  {
    id: 1,
    label: "Best Funiture for your castle",
    titleHeader: "New Furniture Collection Trends in 2020",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
    in est adipiscing in phasellus non in justo.`,
    img: sofaPromotion,
  },
  {
    id: 2,
    label: "Best choose for your house",
    titleHeader: "New Furniture Collection Trends in 2023",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
    in est adipiscing in phasellus non in justo.`,
    img: blueSofa,
  },
  {
    id: 3,
    label: "Best chair for your room",
    titleHeader: "best Furniture Collections in 2021",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
    in est adipiscing in phasellus non in justo.`,
    img: tortuga,
  },
];
export default function Home() {
  return (
    <Layout>
      <div id={style.Home_Page}>
        <section className={style.promotionContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
              bulletActiveClass: style.bulletPagiActive,
              bulletClass: style.bulletPagi,
              horizontalClass: style.bulletContainerHorizon,
            }}
            className={style.swiperHeader}
            navigation={true}
            modules={[Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {advertises.map((adv, index) => (
              <SwiperSlide key={adv.id}>
                <div className={style.promotion}>
                  <Image
                    className={style.decorItem}
                    src={lighter}
                    alt="trang-tri"
                  />
                  <div className={style.leftPromotion}>
                    <Link className={style.label} href="#">
                      {adv.label}
                    </Link>
                    <h1 className={style.titleHeader}>{adv.titleHeader}</h1>
                    <p className={style.descHeader}>{adv.desc}</p>
                    <Button className={style.shopBtn}>Shop Now</Button>
                  </div>
                  <div className={style.rightPromotion}>
                    <Image alt="anh-san-pham" src={adv.img} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className={style.featuredProduct}>
          <h2>Featured Products</h2>
          <FeatureProductSection />
        </section>
        <section className={style.latestProduct}>
          <LatestProduct />
        </section>
        <section className={style.shopexOffer}>
          <h2>What Shopex Offer!</h2>
          <ShopexOffer />
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section className={style.advertiseProduct}>
          <DiscountStandard />
        </section>
        <section className={style.trendingProduct}>
          <h2 className={style.title}>Trending Product</h2>
          <br></br>
          <br></br>
          <Row justify={"space-between"}>
            <Col>
              <SingleTredingCard />
            </Col>
            <Col>
              <SingleTredingCard />
            </Col>
            <Col>
              <SingleTredingCard />
            </Col>
            <Col>
              <SingleTredingCard />
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row justify={"space-between"}>
            <Col>
              <DiscountTrendingCard />
            </Col>
            <Col>
              <DiscountTrendingCard />
            </Col>
            <Col className={style.smallTrendingCardContainer}>
              <div className={style.smCard}>
                <SmallTrendingCard
                  name="Executive Seat chair"
                  price={24}
                  discountPrice={32}
                />
              </div>
              <div className={style.smCard}>
                <SmallTrendingCard
                  name="Executive Seat chair"
                  price={24}
                  discountPrice={32}
                />
              </div>
              <div className={style.smCard}>
                <SmallTrendingCard
                  name="Executive Seat chair"
                  price={24}
                  discountPrice={32}
                />
              </div>
            </Col>
          </Row>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section className={style.discountItem}>
          <h2 className={style.titleSection}>Discount Item</h2>
          <br></br>
          <br></br>
          <DiscountItem />
        </section>
        <section className={style.topCategory}>
          <h2 className={style.title}>Top Categories</h2>
          <TopCate />
        </section>
        <section className={style.advertiseShop}></section>
        <section className={style.supporter}></section>
        <section className={style.latestBlog}>
          <h2 className={style.title}>Latest Blog</h2>
          <LatestBlog />
        </section>
      </div>
    </Layout>
  );
}
