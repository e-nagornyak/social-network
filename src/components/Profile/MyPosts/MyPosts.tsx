import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
 posts: PostsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
    const {posts} = props
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
