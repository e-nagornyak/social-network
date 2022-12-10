import React from 'react';
import s from "./users.module.css";
import userDefault from "../../assets/img/default_avatar.png";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.count)
                // this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.content}>
                {pages.map(p => {
                    return (
                        <span key={p}
                            className={this.props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => this.onPageChanged(p)}>
                            {p}
                        </span>
                    )
                })}
                {this.props.usersPage.users.map((u) => {
                    const FollowHandler = () => this.props.follow(u.id)
                    const UnfollowHandler = () => this.props.unfollow(u.id)
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.avatar} src={(u.photos.small ? u.photos.small : userDefault)} alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={UnfollowHandler}>Unfollow</button>
                                    : <button onClick={FollowHandler}>Follow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users;