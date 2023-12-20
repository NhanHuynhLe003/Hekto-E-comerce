import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaPen } from "react-icons/fa";
import style from "./blogCard.module.scss";

export default function BlogCard({
  authorName,
  img,
  id,
  datePublish,
  titleBlog,
  descBlog,
}) {
  return (
    <div className={style.blogCardItem}>
      <div className={style.imgContainer}>
        <Image
          src={img}
          width={370}
          height={255}
          alt={`anh-${titleBlog}` || "None"}
        />
      </div>
      <div className={style.infoBlogContainer}>
        <div className={style.infoBar}>
          <p className={style.author}>
            <FaPen />
            {authorName || "Unknow"}
          </p>
          <p className={style.date}>
            <FaCalendar />
            {datePublish || "None"}
          </p>
        </div>
        <div className={style.information}>
          <p className={style.title}>
            {titleBlog || "Lorem ipsum dolor sit amet."}
          </p>
          <p className={style.desc}>
            {descBlog ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum debitis sint rem in minima minus illo perspiciatis porro est?"}
          </p>
        </div>
        <Link className={style.navigateBtn} href="#">
          Read More
        </Link>
      </div>
    </div>
  );
}
