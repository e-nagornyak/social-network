import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {
    // Map postsElements
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    //
    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = postMessageRef.current?.value
        alert(text)
    }

    // JSX
    return (
        <div>
            <h1>my post</h1>
            <div>
                <div>
                    <textarea ref={postMessageRef}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
