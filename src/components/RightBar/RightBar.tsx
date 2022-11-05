import React from 'react';
import s from "../RightBar/RightBar.module.css";
import avatar from "../../../src/img/avatar.png";

export const RightBar = () => {
    // JSX
    return (
        <nav className={s.rightBar}>
            <div className={s.item}>
                <img className={s.avatar} src={avatar} alt="avatar"/>
                <a className={s.name} href="#">Name Surname</a>
            </div>
        </nav>
    );
};

