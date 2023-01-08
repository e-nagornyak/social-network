import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {mapDispatchPropsType, MapStatePropsType} from "./MyPostsContainer";
import {AddNewPostReduxForm, newPostFormData} from "./PostForm/AddNewPostForm";

export type myPostsPropsType = MapStatePropsType & mapDispatchPropsType

export const MyPosts: React.FC<myPostsPropsType> = (
    {
        posts,
        addPost
    }) => {

    // Map postsElements
    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // CALLBACK
    const addPostHandler = (text: newPostFormData) => addPost(text.newPostText)

    // JSX
    return (
        <div>
            <h1>my post</h1>
            <div>
                <AddNewPostReduxForm onSubmit={addPostHandler}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
