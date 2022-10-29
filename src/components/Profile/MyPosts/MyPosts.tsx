import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'How are you?', likesCount: 23},
        {id: 2, message: 'Hello!', likesCount: 12},
        {id: 3, message: 'Hello!', likesCount: 0},
        {id: 4, message: 'Hello!', likesCount: 5}
    ]

    let postsElements = posts.map(p => {
        return (
            <Post message={p.message} likesCount={p.likesCount}/>
        )
    })
    return (
        <div>
            <h1>my post</h1>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post and</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
