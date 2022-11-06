import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    data: {
        posts: PostsType[]
    }
    addPostCallback: (postText: string) => void

}

export const Profile: React.FC<ProfilePropsType>= ({data, addPostCallback} ) => {
    const {posts} = data

    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts} addPostCallback={addPostCallback}/>
        </main>
    );
};

