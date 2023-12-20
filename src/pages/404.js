import Layout from "@/layouts/Layout";
import clsx from "clsx";
import Link from "next/link";
import style from "@/styles/scss/404.module.scss";

export default function Custom404Page() {
  return (
    <div id="404_Pages">
      <Layout>
        <div className={style.page404}>
          <h1 className={style.title}>404 Not Found</h1>
          <div className={style.navWrapper}>
            <Link className={clsx(style.navDirect)} href="/">
              Home
            </Link>
            <span>.</span>
            <Link className={clsx(style.navDirect)} href="#">
              Pages
            </Link>
            <span>.</span>
            <Link className={clsx(style.navDirect, style.shopGrid)} href="#">
              Shop Grid Default
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
