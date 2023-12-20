import style from "./Navbar.module.scss";
import { Row, Col, Input } from "antd";
import Link from "next/link";
import clsx from "clsx";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Dropdown } from "antd";

const homeList = [
  {
    label: "1st menu Home",
    key: "1",
  },
  {
    label: "2nd menu Home",
    key: "2",
  },
  {
    label: "3rd menu Home",
    key: "3",
  },
];

export default function Navbar() {
  const [selecting, setSelect] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={style.navBar}>
      <Row>
        <Col span={2} className={style.logo}>
          <h1>Hekto</h1>
        </Col>
        <Col offset={2} span={20} className={style.navLink}>
          <Row className={style.navigateContainer}>
            <Col className={style.navigateLeft} span={6}>
              <ul className={style.listLink}>
                <Dropdown
                  menu={{ items: homeList }}
                  onClick={() => setSelect(1)}
                  className={clsx(style.link, style.dropLink, {
                    [style.select]: selecting === 1,
                  })}
                >
                  <Link href="#">
                    Home <FaAngleDown />
                  </Link>
                </Dropdown>
                <li
                  onClick={() => setSelect(2)}
                  className={clsx(style.link, {
                    [style.select]: selecting === 2,
                  })}
                >
                  <Link href="#">Pages</Link>
                </li>
                <li
                  onClick={() => setSelect(3)}
                  className={clsx(style.link, {
                    [style.select]: selecting === 3,
                  })}
                >
                  <Link href="#">Products</Link>
                </li>
                <li
                  onClick={() => setSelect(4)}
                  className={clsx(style.link, {
                    [style.select]: selecting === 4,
                  })}
                >
                  <Link href="#">Blog </Link>
                </li>
                <li
                  onClick={() => setSelect(5)}
                  className={clsx(style.link, {
                    [style.select]: selecting === 5,
                  })}
                >
                  <Link href="#">Shop</Link>
                </li>
                <li
                  onClick={() => setSelect(6)}
                  className={clsx(style.link, {
                    [style.select]: selecting === 6,
                  })}
                >
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col className={style.navigateRight} span={10} offset={8}>
              <div className={style.inputGroup}>
                <Input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className={clsx(style.searchInput)}
                  type="text"
                />
                <button>
                  <FaSearch />
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
