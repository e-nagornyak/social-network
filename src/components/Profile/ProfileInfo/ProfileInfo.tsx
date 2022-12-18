import React from 'react';
import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/img/avatar.png";
import {ProfileType} from "../../../redux/reducers/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    className={s.avatar}
                    src={(props.profile.photos.large ? props.profile.photos.large : avatar)}
                    alt="avatar"/>
            </div>
            <div>
                <h3>{props.profile.fullName}</h3>
                <h3>{props.profile.aboutMe}</h3>
                <h3>{props.profile.lookingForAJob}</h3>
                <h3>{props.profile.lookingForAJobDescription}</h3>
            </div>
        </div>
    );
};

