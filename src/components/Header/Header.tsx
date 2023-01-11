import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
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
                    ? <div>
                        {props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

