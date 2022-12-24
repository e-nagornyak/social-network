import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook?: string | null
        website?: string | null
        vk?: string | null
        twitter?: string | null
        instagram?: string | null
        youtube?: string | null
        github?: string | null
        mainLink?: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type ProfileStateType = {
    profile: ProfileType | null
    posts: PostType[]
    newPostText: string
}

const initialState = {
    profile: null,
    posts: [
        {id: v1(), message: 'How are you?', likesCount: 23},
        {id: v1(), message: 'Hello!', likesCount: 12},
        {id: v1(), message: 'Hello!', likesCount: 0},
        {id: v1(), message: 'Hello!', likesCount: 5}
    ],
    newPostText: '',
}

export type ProfileActionType = addPostACType | updateNewPostTextACType | setUserProfileType
export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile}
        case 'ADD-POST':
            const newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.payload.newText}
        default:
            return state
    }
}
type setUserProfileType = ReturnType<typeof setUserProfile>
const setUserProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", payload: {profile}}) as const

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: "ADD-POST"}) as const

type updateNewPostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", payload: {newText}}) as const

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

