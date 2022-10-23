import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likesCount={23}/>
                <Post message={'It`s my first post?'} likesCount={0}/>
            </div>
        </div>
    );
};
