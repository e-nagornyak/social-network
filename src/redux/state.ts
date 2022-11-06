import {v1} from "uuid";
import {renderTree} from "../renderTree";

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

export type StateType = {
    profilePage: {
        posts: PostsType[]
    }
    dialogsPage: {
        messages: MessagesType[]
        dialogs: DialogsType[]
    }
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'How are you?', likesCount: 23},
            {id: v1(), message: 'Hello!', likesCount: 12},
            {id: v1(), message: 'Hello!', likesCount: 0},
            {id: v1(), message: 'Hello!', likesCount: 5}
        ],
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
    }
}

export const addPost = (postText: string) => {
    const newPost: PostsType = {id: v1(), message: postText, likesCount: 0}
    state.profilePage.posts.unshift(newPost)
    renderTree(state)
}