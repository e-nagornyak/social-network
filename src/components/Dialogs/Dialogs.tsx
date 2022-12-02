import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsPropsType> = (
    {
        dialogsPage,
        sendMessage,
        onMessageChange
    }) => {

    let dialogs = dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messages = dialogsPage.messages.map(m  => <Message key={m.id} message={m.message}/>)

    const sendMessageHandler = () => sendMessage()
    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => onMessageChange(e.currentTarget.value)

    // JSX
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <div className={s.send_wrapper}>
                    <textarea
                        value={dialogsPage.newMessageText}
                        placeholder={'Enter your message'}
                        onChange={onMessageChangeHandler}>
                    </textarea>
                    <button onClick={sendMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};
