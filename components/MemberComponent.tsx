import React from "react";
import style from "../styles/MemberComponent.module.css";
import MemberCard, {MemberCardProps} from "./MemberCard";

const MemberComponent = ()  => {

    const members: MemberCardProps[] = [
        {
            imgUrl: '/member/mathis-burger.png',
            name: 'Mathis Burger',
            nickname: 'BWL Burger'
        },
        {
            imgUrl: '/member/tinos.png',
            name: 'Tinus Trede',
            nickname: 'Daddelo'
        },
        {
            imgUrl: '/member/eric-peters.png',
            name: 'Eric Peters',
            nickname: 'EP'
        },
        {
            imgUrl: '/member/per.png',
            name: 'Peer Arndt',
            nickname: 'Perzi'
        },
        {
            imgUrl: '/member/joern-laabsch.png',
            name: 'Jörn Laabsch',
            nickname: 'Der dicke Bäcker'
        },
        {
            imgUrl: '/member/claas-vollmert.png',
            name: 'Claas Vollmert',
            nickname: 'Kakao'
        },
        {
            imgUrl: '/member/tom.png',
            name: 'Tom Kurds',
            nickname: 'RoterRollerTunerTom'
        },
        {
            imgUrl: '/member/lorenz-eckhoff.png',
            name: 'Lorenz Eckhoff',
            nickname: ''
        },
        {
            imgUrl: '/member/default.jpg',
            name: 'Jarig Roenn',
            nickname: ''
        },
        {
            imgUrl: '/member/kelvin.png',
            name: 'Kelvin Schlüter',
            nickname: 'Fortnite Pro'
        },
        {
            imgUrl: '/member/maci.png',
            name: 'Macius Darm',
            nickname: ''
        },
        {
            imgUrl: '/member/tiade.png',
            name: 'Tiade Speck',
            nickname: ''
        },
        {
            imgUrl: '/member/default.jpg',
            name: 'Tjark Rolfs',
            nickname: ''
        },
        {
            imgUrl: '/member/oke.png',
            name: 'Oke Schuhard',
            nickname: ''
        },
        {
            imgUrl: '/member/default.jpg',
            name: 'Folke Sommer',
            nickname: ''
        }
    ]

    return (
      <>
        <div className={style.componentTitle}>Unsere Mitglieder</div>
          <div className={style.componentContainer}>
              {members.map(props => (
                  <MemberCard {...props} key={props.name} />
              ))}
          </div>
      </>
    );
}

export default MemberComponent;
