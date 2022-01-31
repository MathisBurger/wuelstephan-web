import React from "react";
import style from "../styles/MemberComponent.module.css";
import MemberCard, {MemberCardProps} from "./MemberCard";

const MemberComponent = ()  => {

    const members: MemberCardProps[] = [
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Mathis Burger',
            nickname: 'youngBurger'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Tinus Trede',
            nickname: 'Der Daddler'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Mathis Burger',
            nickname: 'youngBurger'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Mathis Burger',
            nickname: 'youngBurger'
        },
        {
            imgUrl: '/member/mathis-burger.jpg',
            name: 'Mathis Burger',
            nickname: 'youngBurger'
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
