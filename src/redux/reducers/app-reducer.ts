import {authAPI} from "../../api/api";
import {AppDispatch, AppThunk} from "../redux-store";
import {getAuthUserData} from "./auth-reducer";

type authInitialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const appReducer = (state: authInitialStateType = initialState, action: setInitializedType): authInitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {...state, initialized: true}
        }
        default: {
            return state
        }
    }
}

// TYPES FOR AC
type setInitializedType = ReturnType<typeof setInitialized>

// AC
export const setInitialized = () => ({type: "SET-INITIALIZED"}) as const

// THUNKS
export const initializeApp = () => (dispatch: AppDispatch) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(setInitialized())
        })
}