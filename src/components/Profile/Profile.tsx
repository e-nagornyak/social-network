import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {PostsType} from "../../redux/state";
import {ProfileActionType} from "../../redux/reducers/profileReducer";

type ProfilePropsType = {
    data: {
        posts: PostsType[]
        newPostText: string
    }
    dispatch: (action: ProfileActionType) => void
}

export const Profile: React.FC<ProfilePropsType> = (
    {
        data,
        dispatch
    }) => {

    return (
        <main className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={data.posts}
                newPostText={data.newPostText}
                dispatch={dispatch}
            />
        </main>
    );
};

