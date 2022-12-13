import React from 'react';
import s from './Header.module.css'
import avatar from '../../img/avatar.png'
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {


    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img className={s.img_logo}
                     src={'https://cdn-icons-png.flaticon.com/512/9143/9143061.png'}
                     alt="logo"/>
                <h2 className={s.name_logo}>Logo</h2>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <NavLink to={'/login'}>Login</NavLink>
                    :  "Vse ok!"
                }
            </div>
        </header>
    );
};

