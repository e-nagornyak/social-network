import React from 'react';
import avatar from "../../../../img/avatar.png";
import s from './Post.module.css'

type OnePostType = {
    id?: number
    message: string
    likesCount: number
}

export const Post = (props: OnePostType) => {
    const {message, likesCount} = props

    return (
        <div className={s.item}>
            <div className={s.wrapper}>
                <img className={s.avatar} src={avatar} alt="avatar"/>
                {message}
            </div>
            <div>
                <span>{likesCount} like</span>
            </div>
        </div>
    );
};
