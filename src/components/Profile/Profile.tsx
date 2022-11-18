import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {ActionsType, PostsType} from "../../redux/state";

type ProfilePropsType = {
    data: {
        posts: PostsType[]
        newPostText: string
    }
    dispatch: (action: ActionsType) => void
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

