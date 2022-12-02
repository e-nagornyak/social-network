import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersStateType, UserType} from "../../redux/reducers/usersReducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    usersPage: UsersStateType
}
export type UsersPropsType = MapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}

type mapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);