import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType, updateNewPostText} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {
        posts,
        newPostText,
        addPostCallback,
        updateNewPostText
    }) => {

    // Map postsElements
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    //
    const addPost = () => addPostCallback()
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            updateNewPostText(e.currentTarget.value)
        }
    }

    // JSX
    return (
        <div>
            <h1>my post</h1>
            <div>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
