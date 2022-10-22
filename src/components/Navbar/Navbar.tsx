import React from 'react';
import s from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a className={s.link} href={'##'}>Profile</a>
            </div>
            <div className={s.item}>
                <a className={s.link} href={'##'}>Message</a>
            </div>
            <div className={s.item}>
                <a className={s.link} href={'##'}>News</a>
            </div>
            <div className={s.item}>
                <a className={s.link} href={'##'}>Music</a>
            </div>
            <div className={s.item}>
                <a className={s.link} href={'##'}>Settings</a>
            </div>
            <div className={s.bg}></div>
        </nav>
    );
};
