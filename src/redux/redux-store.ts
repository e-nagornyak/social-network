import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/AuthReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer

});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);