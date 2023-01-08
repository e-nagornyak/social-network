import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {mapDispatchPropsType, MapStatePropsType} from "./DialogsContainer";
import {newMessageFormData, AddMessageReduxForm} from "./AddMessageForm";

export const Dialogs: React.FC<MapStatePropsType & mapDispatchPropsType> = (
    {
        dialogsPage,
        sendMessage,
    }) => {

    let dialogs = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messages = dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addMessage = (text: newMessageFormData) => {
        sendMessage(text.newMessageBody)
    }

    // JSX
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};


