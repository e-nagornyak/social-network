import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={'/dialogs/1'}>Jenia</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs/2'}>Lisa</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs/3'}>Vasia</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs/4'}>Bogdan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your day?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    );
};
