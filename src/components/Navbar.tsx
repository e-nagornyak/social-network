import React from 'react';
import '../css/navbar.css';


export const Navbar = () => {
    return (
        <nav className={'nav'}>
            <div className={'nav-items'}>
                <a>Profile</a>
            </div>
            <div className={'nav-items'}>
                <a>Message</a>
            </div>
            <div className={'nav-items'}>
                <a>News</a>
            </div>
            <div className={'nav-items'}>
                <a>Music</a>
            </div>
            <div className={'nav-items'}>
                <a>Settings</a>
            </div>
            <div className={'navbar-bg'}></div>
        </nav>
    );
};
