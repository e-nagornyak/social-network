import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


// Types
type DialogItemType = {
    id: number
    name: string
}

type MessageType = {
    message: string
}

type DialogsDataType = {
    id: number,
    name: string
}

const DialogItem = ({name, id}: DialogItemType) => {
    let path = `/dialogs/${id}`
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
    let dialogs: Array<DialogsDataType> = [
        {id: 1, name: 'Evhen'},
        {id: 2, name: 'Lisa'},
        {id: 3, name: 'Bogdan'},
        {id: 4, name: 'Sonia'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Sasha'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How'},
        {id: 4, message: 'Yo!?'},
        {id: 5, message: 'How are you?'},
        {id: 6, message: 'Yes i am'},

    ]


    let dialogsElements = dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let messagesElements = messages.map(m => {
        return <Message message={m.message}/>
    })

    // JSX
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
