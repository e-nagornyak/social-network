import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostsType} from "../../index";

type ProfilePropsType = {
    posts: PostsType[]
}

export const Profile = (props: ProfilePropsType) => {
    const {posts} = props
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </main>
    );
};

