import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    data: {
        posts: PostsType[]
    }

}

export const Profile = (props: ProfilePropsType) => {
    const {posts} = props.data

    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </main>
    );
};

