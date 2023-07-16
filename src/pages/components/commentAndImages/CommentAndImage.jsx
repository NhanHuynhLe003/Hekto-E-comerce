import React, {useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import style from "./commentImage.module.scss";
import Image from "next/image";
import clsx from "clsx";

const people = [
  {
    id: 1,
    names: ["John Smith", "Emily Johnson", "Michael Davis"],
    images: ["img1", "img2", "img3"],
    professions: ["Software Engineer", "Graphic Designer", "Photographer"],
    descriptions: [
      "John Smith is a talented software engineer with expertise in front-end development. He has a passion for creating user-friendly and visually appealing web applications. With several years of experience, John has worked on various projects, collaborating with cross-functional teams to deliver high-quality software solutions.",
      "Emily Johnson is a creative graphic designer known for her innovative designs and attention to detail. She specializes in branding and logo design, and her work has received several accolades in the industry. Emily's unique approach to design combines aesthetics with functionality, resulting in visually stunning and impactful creations.",
      "Michael Davis is a talented photographer who captures moments with artistic flair. He specializes in landscape and portrait photography, showcasing his ability to evoke emotions through his images. Michael's passion for photography drives him to explore different techniques and perspectives, resulting in captivating and visually striking photographs",
    ],
  },
  {
    id: 2,
    names: ["Adam Smith", "Thomas Johnson", "Michael Jackson"],
    images: ["img4", "img5", "img6"],
    professions: ["architecture Engineer", "Swimmer", "Dancer"],
    descriptions: [
      "John Smith is a talented software engineer with expertise in front-end development. He has a passion for creating user-friendly and visually appealing web applications. With several years of experience, John has worked on various projects, collaborating with cross-functional teams to deliver high-quality software solutions.",
      "Emily Johnson is a creative graphic designer known for her innovative designs and attention to detail. She specializes in branding and logo design, and her work has received several accolades in the industry. Emily's unique approach to design combines aesthetics with functionality, resulting in visually stunning and impactful creations.",
      "Michael Davis is a talented photographer who captures moments with artistic flair. He specializes in landscape and portrait photography, showcasing his ability to evoke emotions through his images. Michael's passion for photography drives him to explore different techniques and perspectives, resulting in captivating and visually striking photographs",
    ],
  },
  {
    id: 3,
    names: ["John Cena", "Anna Johnson", "Michael Jordan"],
    images: ["img7", "img8", "img9"],
    professions: ["Software Engineer", "Graphic Designer", "Photographer"],
    descriptions: [
      "John Smith is a talented software engineer with expertise in front-end development. He has a passion for creating user-friendly and visually appealing web applications. With several years of experience, John has worked on various projects, collaborating with cross-functional teams to deliver high-quality software solutions.",
      "Emily Johnson is a creative graphic designer known for her innovative designs and attention to detail. She specializes in branding and logo design, and her work has received several accolades in the industry. Emily's unique approach to design combines aesthetics with functionality, resulting in visually stunning and impactful creations.",
      "Michael Davis is a talented photographer who captures moments with artistic flair. He specializes in landscape and portrait photography, showcasing his ability to evoke emotions through his images. Michael's passion for photography drives him to explore different techniques and perspectives, resulting in captivating and visually striking photographs",
    ],
  },
];

export default function CommentAndImage() {
  const [curAuthor, setCurAuthor] = useState(1);
  
  return (
    <div>
      <h1>hello</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => setCurAuthor(1)}
        modules={[Pagination]}
        className={style.swiperSlide}
      >
        {people.map((person, index) => (
          <SwiperSlide className={style.swiperSlideContainer} key={person.id}>
            <div className={style.imgContainer}>
              {person.images.map((pic, i) => (
                <Image
                  onClick={() => setCurAuthor(i)}
                  className={clsx(style.img, {
                    [style.imgChoose]: i == curAuthor,
                  })}
                  key={i}
                  width={55}
                  height={60}
                  alt={`avt-${person.id}`}
                  src={`/commentAvt/${pic}.jpg`}
                />
              ))}
            </div>
            <h1 className={style.nameAuthor}>
              {person.names.map((name, index) =>
                index == curAuthor ? name : ""
              )}
            </h1>
            <p className={style.aboutAuthor}>
              {person.professions.map((job, index) =>
                index === curAuthor ? job : ""
              )}
            </p>
            <p className={style.description}>
              {person.descriptions.map((desc, index) =>
                index === curAuthor ? desc : ""
              )}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
