import React from 'react';
import s from "./ProfileInfo.module.css";
import avatar from "../../../img/avatar.png";
import {ProfileType} from "../../../redux/reducers/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
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
                    src={(props.profile.photos.large)}
                    alt="avatar"/>
            </div>
            <div>ava + description</div>
        </div>
    );
};

