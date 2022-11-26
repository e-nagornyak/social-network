import {v1} from "uuid";
import {PostsType, ProfilePageType} from "../store";

const initialState = {
    posts: [
        {id: v1(), message: 'How are you?', likesCount: 23},
        {id: v1(), message: 'Hello!', likesCount: 12},
        {id: v1(), message: 'Hello!', likesCount: 0},
        {id: v1(), message: 'Hello!', likesCount: 5}
    ],
    newPostText: '',
}

export type ProfileActionType = AddPostActionType | UpdateNewPostTextType
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}
type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: "ADD-POST"}) as const

type UpdateNewPostTextType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText}) as const // як константа

