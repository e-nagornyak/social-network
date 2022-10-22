import React from 'react';
import logo from '../img/logo-header.png'


import '../css/header.css'

export const Header = () => {
    return (
        <header className={'header'}>
            <img className={'logo-header'}
                src={logo}
                alt="logo"/>
            <div className={'header-bg'}></div>
        </header>
    );
};

