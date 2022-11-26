import {v1} from "uuid";
import {PostsType, ProfilePageType} from "../state";


export type ProfileActionType = AddPostActionType | UpdateNewPostTextType
export const profileReducer = (state: ProfilePageType, action: ProfileActionType) => {
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

