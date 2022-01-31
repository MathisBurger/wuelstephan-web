import type { NextPage } from 'next'
import Header from "../components/Header";
import style from "../styles/Index.module.css";
import MemberComponent from "../components/MemberComponent";

const Home: NextPage = () => {


  return (
    <>
      <Header />
      <div className={style.container}>
          <img src="/headerImg.jpeg" className={style.topImg} />
          <MemberComponent />
      </div>
    </>
  )
}

export default Home;
