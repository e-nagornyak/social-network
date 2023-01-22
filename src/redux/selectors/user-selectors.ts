import {AppStateType} from "../redux-store";

export const getUsersTest = (state: AppStateType) =>  state.usersPage.users
export const getPageSize = (state: AppStateType) =>  state.usersPage.pageSize
export const getTotalUsersCount = (state: AppStateType) =>  state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppStateType) =>  state.usersPage.currentPage
export const getIsFetching = (state: AppStateType) =>  state.usersPage.isFetching
export const getFollowingProgress = (state: AppStateType) =>  state.usersPage.followingInProgress
// export const getFollowingProgress = (state: AppStateType) =>  state.usersPage.followingInProgress
