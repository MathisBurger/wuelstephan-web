import React from "react";
import style from "../styles/MemberComponent.module.css";
import MemberCard, {MemberCardProps} from "./MemberCard";

const MemberComponent = ()  => {

    const members: MemberCardProps[] = [
        {
            imgUrl: '/member/mathis-burger.png',
            name: 'Mathis Burger',
            nickname: 'youngBurger'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Tinus Trede',
            nickname: 'Daddelo'
        },
        {
            imgUrl: '/member/eric-peters.png',
            name: 'Eric Peters',
            nickname: 'EP'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Peer Arndt',
            nickname: 'Perzi'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Jörn Laabsch',
            nickname: 'Der dicke Bäcker'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Claas Vollmert',
            nickname: 'Kakao'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Tom Kurds',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Lorenz Eckhoff',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Jarig Roenn',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Kelvin Schlüter',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Macius Darm',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Claas Vollmert',
            nickname: 'Kakao'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Tiade Speck',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Tjark Rolfs',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Oke Schuhard',
            nickname: ''
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
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
