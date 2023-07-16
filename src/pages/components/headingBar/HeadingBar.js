import { Row, Col, Dropdown, Space } from "antd";
import style from "./headingBar.module.scss";
import emailIc from "../../assets/icons/emailIc.svg";
import phoneIc from "../../assets/icons/phoneCallIc.svg";
import cartIC from "../../assets/icons/cartIc.svg";
import userIc from "../../assets/icons/userIc.svg";
import heartIc from "../../assets/icons/heartIc.svg";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa";

const items1 = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const items2 = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export default function HeadingBar({
  phoneNumber = "(12345)67890",
  email = "mhhasanul@gmail.com",
}) {
  return (
    <div>
      <Row className={style.container}>
        <Col className={style.colFirst} span={8}>
          <Link href="#" className={clsx(style.textWrapper, style.emailContainer)}>
            <div className={style.iconContainer}>
              <Image src={emailIc} className={style.img} alt="emailIc"></Image>
            </div>
            <p className={style.content}>{email}</p>
          </Link>
        </Col>
        <Col className={style.colSecond} span={6}>
          <Link href="#" className={clsx(style.textWrapper, style.emailContainer)}>
            <div className={style.iconContainer}>
              <Image src={phoneIc} className={style.img} alt="emailIc"></Image>
            </div>
            <p className={style.content}>{phoneNumber}</p>
          </Link>
        </Col>
        <Col span={10} className={style.colThird}>
          <Dropdown
            menu={{
              items: items1,
            }}
            className={clsx(style.hover)}
          >
            <Space>
              English <FaAngleDown />
            </Space>
          </Dropdown>

          <Dropdown
            menu={{
              items: items2,
            }}
            className={clsx(style.hover)}
          >
            <Space>
              USD <FaAngleDown />
            </Space>
          </Dropdown>

          <span className={clsx(style.textWrapper, style.emailContainer, style.hover)}>
            <p className={style.content}>Login</p>
            <div className={style.iconContainer}>
              <Image src={userIc} className={style.img} alt="userIcon"></Image>
            </div>
          </span>

          <span className={clsx(style.textWrapper, style.emailContainer, style.hover)}>
            <p className={style.content}>WishList</p>
            <div className={style.iconContainer}>
              <Image src={heartIc} className={style.img} alt="likeIcon"></Image>
            </div>
          </span>

          <span className={clsx(style.textWrapper, style.emailContainer, style.hover)}>
            <div className={style.iconContainer}>
              <Image src={cartIC} className={style.img} alt="shoppingCart"></Image>
            </div>
          </span>
        </Col>
      </Row>
    </div>
  );
}
