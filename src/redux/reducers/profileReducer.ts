import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

type ProfileStateType = {
    posts: PostType[]
    newPostText: string
}

const initialState = {
    posts: [
        {id: v1(), message: 'How are you?', likesCount: 23},
        {id: v1(), message: 'Hello!', likesCount: 12},
        {id: v1(), message: 'Hello!', likesCount: 0},
        {id: v1(), message: 'Hello!', likesCount: 5}
    ],
    newPostText: '',
}

export type ProfileActionType = addPostACType | updateNewPostTextACType
export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.payload.newText}
        }
        default:
            return state
    }
}
type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: "ADD-POST"}) as const

type updateNewPostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", payload: {newText}}) as const

