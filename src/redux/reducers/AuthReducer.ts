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
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}

type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: "SET-USER-DATA",
    payload: {userId, email, login}
}) as const
