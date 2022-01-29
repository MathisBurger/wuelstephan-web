import type { NextPage } from 'next'
import Header from "../components/Header";
import style from "../styles/Index.module.css";

const Home: NextPage = () => {


  return (
    <>
      <Header />
      <img src="/headerImg.jpeg" className={style.topImg} />
        <div className={style.textWrapper}>
            <div className={style.title}>SC Wühlstephan</div>
            <div className={style.description}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
        </div>
    </>
  )
}

export default Home;
