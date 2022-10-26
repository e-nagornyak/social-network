import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


// Types
type DialogItemType = {
    link: string
    name: string
}

type MessageType = {
    message: string
}

type DialogsDataType = {
    id: number,
    name: string
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
    // Data
    let dialogsData: Array<DialogsDataType> = [
        {id: 1, name: 'Evhen'},
        {id: 2, name: 'Lisa'},
        {id: 3, name: 'Bogdan'},
        {id: 4, name: 'Sonia'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Sasha'}
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},

    ]


    // JSX
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <DialogItem name={dialogsData[0].name} link='1'/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
            </div>
        </div>
    );
};
