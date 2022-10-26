import React from 'react';
import logo from '../../img/logo-header.svg'
import avatar from '../../img/avatar.png'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img className={s.logo}
                src={logo}
                alt="logo"/>
                <h2 className={s.name_logo}>Social</h2>
            </div>
            <label>
                <input type="text"/>
                <button>P</button>
            </label>
            <div>
                <a>Home </a>
                <a>Friend </a>
                <a>Notification </a>
                <a>Message </a>
                <img className={s.avatar} src={avatar} alt=""/>
                <span>Name </span>
                <span>Surname</span>
            </div>


        </header>
    );
};

