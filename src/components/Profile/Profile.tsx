import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Store} from "redux";

type ProfilePropsType = {
    store: Store
}

export const Profile: React.FC<ProfilePropsType> = ({store}) => {
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </main>
    );
};

