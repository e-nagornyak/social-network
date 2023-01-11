import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIfFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "../reducers/users-reducer";

export type followType = ReturnType<typeof followSuccess>
export type unfollowType = ReturnType<typeof unfollowSuccess>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type toggleIfFollowingProgressType = ReturnType<typeof toggleIfFollowingProgress>
