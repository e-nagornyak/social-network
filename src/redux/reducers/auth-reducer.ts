import {authAPI} from "../../api/api";
import {AppDispatch, AppThunk} from "../redux-store";
import {stopSubmit} from "redux-form";

type authInitialStateType = {
    userId: string | null
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
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}

// TYPES FOR AC
type setAuthUserDataType = ReturnType<typeof setAuthUserData>

// AC
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "SET-USER-DATA",
    payload: {userId, email, login, isAuth}
}) as const

// THUNKS
export const getAuthUserData = (): AppThunk => (dispatch: AppDispatch) => {
    authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        }
    )
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch: AppDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = (response.data.messages.length > 0) ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = (): AppThunk => (dispatch: AppDispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}