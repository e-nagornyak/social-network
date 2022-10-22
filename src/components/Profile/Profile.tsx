import React from 'react';
import avatar from '../../img/avatar.png'
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
            <div>
                my post
                <div>new post</div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
                <div>post 3</div>
            </div>
        </main>

    );
};

