import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
// ReturnType - те, що повертає санка
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store