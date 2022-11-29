import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType,} from "../../../redux/store";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export const MyPosts: React.FC<MyPostsPropsType> = (
    {
        posts,
        newPostText,
        updateNewPostText,
        addPost
    }) => {

    // Map postsElements
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    //Callback
    const addPostHandler = () => addPost()
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => updateNewPostText(e.currentTarget.value)

    // JSX
    return (
        <div>
            <h1>my post</h1>
            <div>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={onPostChangeHandler}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
