import {v1} from "uuid";

export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersStateType = {
    users: UserType[]
}

const initialState = {
    users: [
        {
            id: v1(),
            photoUrl: '',
            followed: false,
            fullName: 'Evhen',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: v1(),
            photoUrl: '',
            followed: true,
            fullName: 'Lisa',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: v1(),
            photoUrl: '',
            followed: false,
            fullName: 'Bogdan',
            status: 'I am a boss',
            location: {city: 'Lviv', country: 'Ukraine'}
        },
    ]
}

export type UsersActionType = followACType | unfollowACType | setUsersACType
export const usersReducer = (state: UsersStateType = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...state.users, ...action.payload.users]
            }
        }
        default:
            return state
    }
}
type followACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => ({type: "FOLLOW", payload: {userId}}) as const

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", payload: {userId}}) as const

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", payload: {users}}) as const

