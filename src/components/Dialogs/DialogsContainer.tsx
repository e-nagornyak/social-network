import React from 'react';
import {sendMessageAC, updateMessageTextAC} from "../../redux/reducers/dialogsReducer";
import {Store} from "redux";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: Store
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = ({store}) => {
    const state = store.getState()

    const sendMessage = () => store.dispatch(sendMessageAC())
    const onMessageChange = (text: string) => store.dispatch(updateMessageTextAC(text))


    // JSX
    return <Dialogs
        onMessageChange={onMessageChange}
        sendMessage={sendMessage}
        dialogsElements={state.dialogsPage.dialogs}
        messagesElements={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}
    />
};
