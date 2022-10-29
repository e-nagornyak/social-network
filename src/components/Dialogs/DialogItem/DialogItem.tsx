import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";



type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    const {name, id} = props
    let path = `/dialogs/${id}`
    return (
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

