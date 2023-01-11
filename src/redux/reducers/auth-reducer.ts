import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {AppDispatch, AppThunk} from "../redux-store";

type authInitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type authActionType = setAuthUserDataType
export const authReducer = (state: authInitialStateType = initialState, action: authActionType): authInitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload, isAuth: true}
        }
        default: {
            return state
        }
    }
}

// TYPE FOR AC
type setAuthUserDataType = ReturnType<typeof setAuthUserData>

// AC
export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: "SET-USER-DATA",
    payload: {userId, email, login}
}) as const

// THUNKS
export const getAuthUserData = (): AppThunk => (dispatch: AppDispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = (): AppThunk => (dispatch: AppDispatch) => {
    authAPI.logout()
        .then(response => {

        })
}