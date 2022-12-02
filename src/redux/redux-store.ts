import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {usersReducer} from "./reducers/usersReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer

});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);