import type { NextPage } from 'next'
import Header from "../components/Header";
import style from "../styles/Index.module.css";

const Home: NextPage = () => {


  return (
    <>
      <Header />
      <img src="/headerImg.jpeg" className={style.topImg} />
    </>
  )
}

export default Home;
