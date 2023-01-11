import {v1} from "uuid";

export type DialogsStateType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
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
    ]
}

export type DialogsActionType = sendMessageACType
export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionType): DialogsStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage: MessagesType = {id: v1(), message: action.payload.text}
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default: {
            return state
        }
    }
}
// TYPE FOR AC
type sendMessageACType = ReturnType<typeof sendMessage>

// AC
export const sendMessage = (text: string) => ({type: "SEND-MESSAGE", payload: {text}}) as const

