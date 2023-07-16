import React from 'react'
import style from './discountItem.module.scss'
import { Row, Col } from 'antd'
import Image from 'next/image'
import sofaAdv from "../../assets/imgs/sofa_advertise_1.jpg"
import { FaCheck } from 'react-icons/fa'

export default function DiscountItemProduct({id, src,discountTitle, name, description, standards=["Material expose like metals", "Clear lines and geomatric figures", "Simple neutral colours.", "Material expose like metals"]}) {
  return (
    <div className={style.discountItem}>
      <Row>
        <Col className={style.discountLeft} span={24} md={{span: 10}}>
            <h2>{discountTitle || "None"}</h2>
            <h4>{name || "None"}</h4>
            <p className={style.desc}>{description || "None"}</p>
            <ul className={style.standardWrapper}>
                {standards.length>0 && standards.map((standard,index) => <li key={index}><FaCheck/><p>{standard}</p></li>)}
            </ul>
            <button className={style.btn}>Shop Now</button>
        </Col>
        <Col className={style.discountRight} span={24} md={{span: 14}}>
            <Image width={700} height={600} src={src || sofaAdv} alt={"image-of-"+name||"None"}/>
        </Col>
      </Row>
      
    </div>
  )
}
