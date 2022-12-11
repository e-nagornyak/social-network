export type UserType = {
    id: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 15,
    currentPage: 1,
    isFetching: true
}

export type UsersActionType =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType

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
            return {...state, users: action.payload.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.payload.totalCount}
        }
        case "TOGGLE-IS-FETCHING":{
            return {...state, isFetching: action.payload.isFetching}
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

type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (pageNumber: number) => ({type: "SET-CURRENT-PAGE", payload: {pageNumber}}) as const

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => ({    type: "SET-TOTAL-USERS-COUNT",    payload: {totalCount}}) as const

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", payload: {isFetching}}) as const
