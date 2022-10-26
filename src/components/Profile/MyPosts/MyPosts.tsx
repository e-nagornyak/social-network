import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'How are you?', likesCount: 23},
        {id: 2, message: 'Hello!', likesCount: 12}
    ]

    return (
        <div>
            <h1>my post</h1>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
};
