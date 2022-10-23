import React from 'react';
import logo from '../../img/logo-header.png'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                src={logo}
                alt="logo"/>
        </header>
    );
};

