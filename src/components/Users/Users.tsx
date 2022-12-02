import React from 'react';
import {UsersPropsType} from "./UsersContainer";


export const Users: React.FC<UsersPropsType> = (props) => {
    return (
        <div>
            {props.usersPage.users.map(u => {
                return (
                    <div key={u.id}></div>
                )
            })}
        </div>
    )
}


