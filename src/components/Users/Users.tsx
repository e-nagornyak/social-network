import React from 'react';
import s from "./users.module.css";
import userDefault from "../../assets/img/default_avatar.png";
import {UserType} from "../../redux/reducers/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void
    toggleIfFollowingProgress: (isFetching: boolean, userId: string) => void
    followingProgress: string[]
}

const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.content}>
            {pages.map(p => {
                return <span key={p}
                             className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => props.onPageChanged(p)}>
                            {p}
                       </span>
            })}
            {props.users.map((u) => {

                const followHandler = () => {
                    props.toggleIfFollowingProgress(true, u.id)
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {"API-KEY": "b5d66a17-e300-438a-836a-f262d6d4bfa6"}
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(u.id)
                        }
                        props.toggleIfFollowingProgress(false, u.id)
                    })
                }

                const unfollowHandler = () => {
                    props.toggleIfFollowingProgress(true, u.id)
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                            withCredentials: true,
                            headers: {"API-KEY": "b5d66a17-e300-438a-836a-f262d6d4bfa6"}
                        }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id)
                        }
                        props.toggleIfFollowingProgress(false, u.id)
                    })
                }

                return <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img className={s.avatar} src={(u.photos.small ? u.photos.small : userDefault)} alt=""/>
                                </NavLink>

                            </div>
                            <div>
                                {u.followed
                                    ? <button
                                        disabled={props.followingProgress.some(id => id === u.id)}
                                        onClick={unfollowHandler}>
                                        Unfollow
                                    </button>
                                    : <button
                                        disabled={props.followingProgress.some(id => id === u.id)}
                                        onClick={followHandler}>
                                        Follow
                                    </button>
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
            })}
        </div>
    )
};

export default Users;