import React from 'react';
import avatar from "../../../../img/avatar.png";
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
}

export const Post = ({message, likesCount}: PostType) => {
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
