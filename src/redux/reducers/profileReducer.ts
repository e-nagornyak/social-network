import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../api/api";

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
    status: string
}

const initialState = {
    profile: null,
    posts: [
        {id: v1(), message: 'How are you?', likesCount: 23},
        {id: v1(), message: 'Hello!', likesCount: 12},
        {id: v1(), message: 'Hello!', likesCount: 0},
        {id: v1(), message: 'Hello!', likesCount: 5}
    ],
    status: ''
}

export type ProfileActionType = addPostACType  | setUserProfileType | setStatusACType
export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile}
        case 'ADD-POST':
            const newPost: PostType = {id: v1(), message: action.payload.text, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case "SET-STATUS":
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

// TYPE FOR AC
type setUserProfileType = ReturnType<typeof setUserProfile>
type addPostACType = ReturnType<typeof addPost>
type setStatusACType = ReturnType<typeof setStatus>

// AC
export const setUserProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", payload: {profile}}) as const
export const addPost = (text: string) => ({type: "ADD-POST", payload: {text}}) as const
export const setStatus = (status: string) => ({type: "SET-STATUS", payload: {status}}) as const

// THANK
export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateUserStatus = (status: string) => {
    debugger
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

