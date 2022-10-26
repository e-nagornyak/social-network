import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    link: string
    name: string
}

type MessageType = {
    message: string
}

const DialogItem = ({name, link}: DialogItemType) => {
    let path = `/dialogs/${link}`
    return (
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}: MessageType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <DialogItem name={'Evhen'} link='1'/>
                <DialogItem name={'Liza'} link='2'/>
                <DialogItem name={'Bogdan'} link='3'/>
                <DialogItem name={'Sonia'} link='4'/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your day?'}/>
                <Message message={'Yo!'}/>
            </div>
        </div>
    );
};
