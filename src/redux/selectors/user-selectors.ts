import {AppStateType} from "../redux-store";

export const getUsersTest = (state: AppStateType) => {
    return state.usersPage.users
};