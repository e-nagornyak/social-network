import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import avatar from '../../../img/avatar.png'


type DialogItemType = {
    id: string
    name: string
}

export const DialogItem: React.FC<DialogItemType> = ({name, id}) => {
    let path = `/dialogs/${id}`

    //JSX
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.active}>
                <img className={s.avatar} src={avatar} alt="avatar"/>
                <span>{name}</span>
            </NavLink>
        </div>
    )
}

