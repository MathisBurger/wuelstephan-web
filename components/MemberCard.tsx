import style from "../styles/MemberComponent.module.css";


export interface MemberCardProps {
    imgUrl: string;
    name: string;
    nickname: string;
}

const MemberCard = ({imgUrl, name, nickname}: MemberCardProps) => {


    return (
        <div className={style.memberCard}>
            <img src={imgUrl} alt="profile-picture" />
            <h3>{name}</h3>
            {nickname ? <p>&quot;{nickname}&quot;</p> : <p />}
        </div>
    );
};

export default MemberCard;
