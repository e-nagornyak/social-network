import React from 'react';
import avatar from '../../img/avatar.png'
import {MyPosts} from "./MyPosts/MyPosts";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <main className={s.profile}>
            <div>
                <span className={s.bg}></span>
            </div>
            <div>
                <img
                    className={s.avatar}
                    src={avatar}
                    alt=""/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </main>

    );
};

