import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    data: {
        posts: PostsType[]
        newPostText: string
    }
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void

}

export const Profile: React.FC<ProfilePropsType> = (
    {
        data,
        addPostCallback,
        updateNewPostText
    }) => {
    const {posts, newPostText} = data

    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={posts}
                newPostText={newPostText}
                addPostCallback={addPostCallback}
                updateNewPostText={updateNewPostText}
            />
        </main>
    );
};

