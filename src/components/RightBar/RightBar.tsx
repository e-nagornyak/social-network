import React from 'react';
import s from "../RightBar/RightBar.module.css";
import avatar from "../../../src/img/avatar.png";
import {NavLink} from "react-router-dom";

export const RightBar = () => {
    return (
        <nav className={s.rightBar}>
            <div className={s.item}>
                <img className={s.avatar} src={avatar} alt="avatar"/>
                <a className={s.name} href="#">Name Surname</a>
            </div>
        </nav>
    );
};

