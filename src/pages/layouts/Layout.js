import Head from "next/head"
import HeadingBar from "../components/headingBar/HeadingBar"
import Navbar from "../components/navigationBar/Navbar"
import style from './layout.module.scss'
import Footer from "../components/footer/Footer"

export default function Layout({children,title="e-comerce"}) {
  return (
    <div className={style.layoutWrapper}>

        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <HeadingBar/>
            <div className={style.navWrapper}>
                <Navbar/>
            </div>
        </header>
        <main>
            {children}
        </main>
        <Footer/>

        
    </div>
    
  )
}
