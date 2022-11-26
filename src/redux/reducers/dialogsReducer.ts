import {v1} from "uuid";
import {DialogsPageType, MessagesType} from "../store";

const initialState = {
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'How'},
        {id: v1(), message: 'Yo!?'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yes i am'}
    ],
    dialogs: [
        {id: v1(), name: 'Evhen'},
        {id: v1(), name: 'Lisa'},
        {id: v1(), name: 'Bogdan'},
        {id: v1(), name: 'Sonia'},
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Sasha'}
    ],
    newMessageText: '',
}

export type DialogsActionType = sendMessageACType | updateMessageTextACType
export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType) => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage: MessagesType = {id: v1(), message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}

type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => ({type: "SEND-MESSAGE"}) as const

type updateMessageTextACType = ReturnType<typeof updateMessageTextAC>
export const updateMessageTextAC = (newText: string) => ({type: "UPDATE-NEW-MESSAGE-TEXT", newText}) as const // як константа