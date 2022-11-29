import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";

type MyPostsContainerPropsType = {
    store: Store
}
export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({store}) => {
    const state = store.getState()
    const addPost = () => store.dispatch(addPostAC())
    const onPostChange = (text: string) => store.dispatch(updatePostTextAC(text))
    // JSX
    return <MyPosts
        posts={state.profilePage.posts}
        addPost={addPost}
        updateNewPostText={onPostChange}
        newPostText={state.profilePage.newPostText}
    />

}
