import {v1} from "uuid";
import {DialogsPageType, MessagesType} from "../state";

export type DialogsActionType = sendMessageACType | updateMessageTextACType
export const dialogsReducer = (state: DialogsPageType, action: DialogsActionType) => {
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