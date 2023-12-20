import { Row, Col, Dropdown, Space } from "antd";
import { FaAngleDown } from "react-icons/fa";
import style from "./sortBy.module.scss";
import clsx from "clsx";
import clarity from "@/assets/icons/clarityGrid.svg";
import listIc from "@/assets/icons/listIcon.svg";
import Image from "next/image";

const items = [
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

export default function SortBy({
  title = "Ecommerce Acceories & Fashion item ",
  desc = "About 9,620 results (0.62 seconds)",
}) {
  return (
    <div>
      <Row>
        <Col className={style.colLeft} span={16}>
          <div className={style.titleWrapper}>
            <h2 className={style.title}>{title}</h2>
            <br />
            <p className={style.desc}>{desc}</p>
          </div>
        </Col>
        <Col span={8} className={style.colRight}>
          <div className={style.sortControllers}>
            <span className={clsx(style.sortCtrl1)}>
              <label className={clsx(style.cateLabel, style.label1)}>
                Per Page:
              </label>
            </span>
            <span className={clsx(style.sortCtrl2)}>
              <label className={clsx(style.cateLabel, style.label2)}>
                Sort By:
              </label>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <Space>
                  Best Match <FaAngleDown />
                </Space>
              </Dropdown>
            </span>
            <span className={clsx(style.sortCtrl3)}>
              <label className={clsx(style.cateLabel, style.label3)}>
                View:
              </label>
              <Image src={clarity} width={12} height={12} />
              <Image src={listIc} width={12} height={12} />
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
