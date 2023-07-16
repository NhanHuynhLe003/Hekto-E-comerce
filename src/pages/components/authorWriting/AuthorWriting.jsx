import style from "./authorWriting.module.scss";

export default function AuthorWriting({
  title = "It is a long established fact that a reader will...",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
}) {
  return (
    <div className={style.textContainer}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.desc}>{desc}</p>
      <button className={style.readMoreBtn}>Read More</button>
    </div>
  );
}
