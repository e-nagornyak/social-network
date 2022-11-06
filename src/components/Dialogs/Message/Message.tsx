import React from 'react';
import s from "../Dialogs.module.css";


type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = ({message} ) => {
    // JSX
    return (
            <div className={s.message}>{message}</div>
    )
}

