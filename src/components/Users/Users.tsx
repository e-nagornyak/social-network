import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import userDefault from '../../assets/img/default_avatar.png'
export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div className={s.content}>
            {props.usersPage.users.map(u => {

                const FollowHandler = () => props.follow(u.id)
                const UnfollowHandler = () => props.unfollow(u.id)

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


