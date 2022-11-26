import {v1} from "uuid";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: any) => void
}


// Store
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'How are you?', likesCount: 23},
                {id: v1(), message: 'Hello!', likesCount: 12},
                {id: v1(), message: 'Hello!', likesCount: 0},
                {id: v1(), message: 'Hello!', likesCount: 5}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },
}


