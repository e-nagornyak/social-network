import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/store";

type DialogsPropsType = {
    dialogsElements: any
    messagesElements: any
    newMessageText: string
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (
    {
        dialogsElements,
        messagesElements,
        newMessageText,
        sendMessage,
        onMessageChange
    }) => {

    let dialogs = dialogsElements.map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messages = messagesElements.map((m: MessagesType) => <Message key={m.id} message={m.message}/>)

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
                        value={newMessageText}
                        placeholder={'Enter your message'}
                        onChange={onMessageChangeHandler}>
                    </textarea>
                    <button onClick={sendMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};
