import React from 'react';
import s from './Header.module.css'
import home from '../../img/logo/home.svg'
import search from '../../img/logo/search.svg'
import notification from '../../img/logo/notification.svg'
import messages from '../../img/logo/messages.svg'
import users from '../../img/logo/users.svg'
import avatar from '../../img/avatar.png'
import logo from '../../img/logo.png'

export const Header = () => {
    //JSX
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img className={s.logo}
                     src={logo}
                     alt="logo"/>
                <h2 className={s.name_logo}>Roket</h2>
            </div>
            <label>
                <input type="text"/>
                <img src={search} alt=""/>
            </label>
            <div className={s.nav}>
                <a><img className={s.icons} src={home} alt="home icon"/> </a>
                <a><img className={s.icons} src={users} alt="users icon"/> </a>
                <a><img className={s.icons} src={notification} alt="notification icon"/> </a>
                <a><img className={s.icons} src={messages} alt="messages icon"/> </a>
                <img className={s.avatar} src={avatar} alt=""/>
                <span>Name </span>
                <span>Surname</span>
            </div>
        </header>
    );
};

