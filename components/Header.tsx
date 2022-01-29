import React from "react";
import style from "../styles/Header.module.css";


const Header: React.FC = () => {

    return (
        <div className={style.header}>
            <img src="/logo.png" alt="logo" style={{height: '120px'}} />
        </div>
    );
}

export default Header;
