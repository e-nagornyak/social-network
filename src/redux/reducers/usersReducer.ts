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
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
}

export type UsersActionsType =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
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
type followType = ReturnType<typeof follow>
export const follow = (userId: string) => ({type: "FOLLOW", payload: {userId}}) as const

type unfollowType = ReturnType<typeof unfollow>
export const unfollow = (userId: string) => ({type: "UNFOLLOW", payload: {userId}}) as const

type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => ({type: "SET-USERS", payload: {users}}) as const

type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (pageNumber: number) => ({type: "SET-CURRENT-PAGE", payload: {pageNumber}}) as const

type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => ({    type: "SET-TOTAL-USERS-COUNT",    payload: {totalCount}}) as const

type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", payload: {isFetching}}) as const
