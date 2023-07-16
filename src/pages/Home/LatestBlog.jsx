import React from 'react'
import style from './latestBlog.module.scss'
import BlogCard from '../components/blogCard/BlogCard'
import blogImg1 from '../assets/imgs/blog_bg_1.jpg'
import blogImg2 from '../assets/imgs/blog_bg_2.jpg'
import blogImg3 from '../assets/imgs/blog_bg_3.jpg'


const blogs = [
  {
    id: 1,
    author: 'David',
    date: "02 July 2023",
    desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est expedita, officiis quam obcaecati veritatis laboriosam facilis iusto ratione sapiente rem!`,
    title: 'Top esssential Trends in 2021',
    img: blogImg1
  },
  {
    id: 2,
    author: 'Johnathan',
    date: "01 July 2020",
    desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est expedita, officiis quam obcaecati veritatis laboriosam facilis iusto ratione sapiente rem!`,
    title: 'Top esssential Trends in 2020',
    img: blogImg2
  },
  {
    id: 3,
    author: 'Mona',
    date: "12 July 2022",
    desc : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est expedita, officiis quam obcaecati veritatis laboriosam facilis iusto ratione sapiente rem!`,
    title: 'Top esssential Trends in 2022',
    img: blogImg3
  },
]
export default function LatestBlog() {
  return (
    <div className={style.LatestBlogContainer}>
      {blogs ? blogs.map((blog,index) => <BlogCard authorName={blog.author} datePublish={blog.date} descBlog={blog.desc} id={blog.id} img={blog.img} titleBlog={blog.title} key={blog.id+index}/>) : <p>Loading Data . . .</p>}
    </div>
  )
}
