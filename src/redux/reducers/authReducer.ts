import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

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

// THANKS
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
               dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}