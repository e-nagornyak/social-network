import React from 'react';
import s from "./users.module.css";
import userDefault from "../../assets/img/default_avatar.png";
import axios from "axios";
import {UserType} from "../../redux/reducers/usersReducer";


class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div className={s.content}>
                {this.props.usersPage.users.map((u: UserType) => {

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