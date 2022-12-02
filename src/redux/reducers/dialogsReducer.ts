import {v1} from "uuid";

export type DialogsStateType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
}
type MessagesType = {
    id: string
    message: string
}
type DialogsType = {
    id: string
    name: string
}

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
export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionType): DialogsStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage: MessagesType = {id: v1(), message: state.newMessageText}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageText: action.newText}
        }
        default: {
            return state
        }
    }
}

type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => ({type: "SEND-MESSAGE"}) as const

type updateMessageTextACType = ReturnType<typeof updateMessageTextAC>
export const updateMessageTextAC = (newText: string) => ({type: "UPDATE-NEW-MESSAGE-TEXT", newText}) as const