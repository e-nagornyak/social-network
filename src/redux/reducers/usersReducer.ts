import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {
    followType,
    setCurrentPageType,
    setTotalUsersCountType,
    setUsersType, toggleIfFollowingProgressType, toggleIsFetchingType,
    unfollowType
} from "../actionsTypes/usersACTypes";

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
    followingInProgress: string[]
}
const initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 35,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type UsersActionsType =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    | toggleIfFollowingProgressType
export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {...state, users: action.payload.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.pageNumber}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state
    }
}
export const followSuccess = (userId: string) => ({type: "FOLLOW", payload: {userId}}) as const
export const unfollowSuccess = (userId: string) => ({type: "UNFOLLOW", payload: {userId}}) as const
export const setUsers = (users: UserType[]) => ({type: "SET-USERS", payload: {users}}) as const
export const setCurrentPage = (pageNumber: number) => ({type: "SET-CURRENT-PAGE", payload: {pageNumber}}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", payload: {isFetching}}) as const
export const setTotalUsersCount = (totalCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT",
    payload: {totalCount}
}) as const

export const toggleIfFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    payload: {isFetching, userId}
}) as const

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            // dispatch(setTotalUsersCount(response.data.totalCount))
        })
    }
}

export const follow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIfFollowingProgress(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIfFollowingProgress(false, userId))
        })
    }
}
export const unfollow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIfFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIfFollowingProgress(false, userId))
        })
    }
}