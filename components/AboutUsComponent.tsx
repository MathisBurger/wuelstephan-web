import style from "../styles/aboutUs.module.css";

const AboutUsComponent = () => {

    return (
      <div className={style.container}>
        <div className={style.title}>SC Wühlstephan</div>
          <div className={style.text}>
              Moin! Wir sind ein schierer Spirituosenvernichtungsclub, der sich auf den Verzehr alkoholischer Substanzen
              spezialisiert hat. Das Gebiet rundum Pahlen und Tellingstedt wurde erfolgreich von uns eingenommen und wird
              seitdem von uns beherrscht.
          </div>
      </div>
    );
}

export default AboutUsComponent;
