import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import {
    follow, getUsers, setCurrentPage, toggleIfFollowingProgress, unfollow, UserType
} from "../../redux/reducers/users-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersTest
} from "../../redux/selectors/user-selectors";

export type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: string[]
}
// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersTest(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

export type mapDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

class UsersContainer extends React.Component<MapStatePropsType & mapDispatchPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    followingProgress={this.props.followingProgress}
                />
            </>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleIfFollowingProgress, getUsers
    }),
    withAuthRedirect,
)(UsersContainer)

