import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostsType, } from "../../../redux/state";
import {addPostAC, updatePostTextAC, ProfileActionType} from "../../../redux/reducers/profileReducer";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ProfileActionType) => void
}
export const MyPosts: React.FC<MyPostsPropsType> = (
    {
        posts,
        newPostText,
        dispatch
    }) => {

    // Map postsElements
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    //Callback
    const addPost = () => dispatch(addPostAC())
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(updatePostTextAC(e.currentTarget.value))

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
