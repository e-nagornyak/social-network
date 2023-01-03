import React from 'react';
import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/img/avatar.png";
import {ProfileType} from "../../../redux/reducers/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
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
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
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

