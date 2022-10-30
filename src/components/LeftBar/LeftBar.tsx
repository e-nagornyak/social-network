import React from 'react';
import s from './LeftBar.module.css';
import {NavLink} from "react-router-dom";

export const LeftBar = () => {
    return (
        <nav className={s.leftBar}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
};
