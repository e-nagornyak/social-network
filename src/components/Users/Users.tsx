import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import {v1} from "uuid";

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png',
                followed: false,
                fullName: 'Evhen',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                photoUrl: 'https://www.pngall.com/wp-content/uploads/12/Grandma-Happy-PNG-File.png',
                followed: true,
                fullName: 'Lisa',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                photoUrl: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png',
                followed: false,
                fullName: 'Bogdan',
                status: 'I am a boss',
                location: {city: 'Lviv', country: 'Ukraine'}
            }])
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
                                <img className={s.avatar} src={u.photoUrl} alt="avatar"/>
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
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}


