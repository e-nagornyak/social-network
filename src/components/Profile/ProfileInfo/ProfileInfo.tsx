import React from 'react';
import s from "./ProfileInfo.module.css";
import avatar from "../../../img/avatar.png";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    className={s.avatar}
                    src={avatar}
                    alt=""/>
            </div>
            <div>ava + description</div>
        </div>
    );
};

