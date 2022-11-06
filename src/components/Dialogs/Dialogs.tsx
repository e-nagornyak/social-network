import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    data: {
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {dialogs, messages} = props.data

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    // JSX
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.send_wrapper}>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};
