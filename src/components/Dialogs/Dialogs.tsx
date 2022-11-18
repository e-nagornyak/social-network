import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogsType,
    MessagesType,
    sendMessageAC,
    UpdateMessageTextAC,
} from "../../redux/state";

type DialogsPropsType = {
    data: {
        dialogs: DialogsType[]
        messages: MessagesType[]
        newMessageText: string
    }
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {dialogs, messages, newMessageText} = props.data

    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    const sendMessage = () => props.dispatch(sendMessageAC())
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(UpdateMessageTextAC(e.currentTarget.value))


    // JSX
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.send_wrapper}>
                    <textarea
                        value={newMessageText}
                        placeholder={'Enter your message'}
                        onChange={onMessageChange}>
                    </textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};
