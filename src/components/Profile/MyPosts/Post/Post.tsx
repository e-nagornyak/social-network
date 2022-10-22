import React from 'react';
import avatar from "../../../../img/avatar.png";
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <div className={s.wrapper}>
                <img className={s.avatar} src={avatar} alt=""/>
                post 1
            </div>
            <div>
                <span>like</span>
            </div>
        </div>

    );
};
