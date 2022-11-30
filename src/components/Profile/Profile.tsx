import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Profile = () => {
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    );
};

