import React, {useEffect, useState} from "react";
import style from "../styles/Header.module.css";


const Header: React.FC = () => {

    const [pageScrolled, setPageScrolled] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                console.log("kanalzerstöer");
                setPageScrolled(true);
            } else {
                setPageScrolled(false);
            }
        });
    }, []);

    return (
        <div className={`${style.header} ${pageScrolled ? style.headerScrolled : ''}`}>
            <img src="/logo.png" alt="logo" style={{height: '100%'}} />
        </div>
    );
}

export default Header;
