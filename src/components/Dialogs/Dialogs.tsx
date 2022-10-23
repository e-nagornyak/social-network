import React from 'react';
import s from './Dialogs.module.css'

type DialogsType = {}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                <div className={`${s.item} ${s.active}`}>Jenia</div>
                <div className={s.item}>Lisa</div>
                <div className={s.item}>Vasia</div>
                <div className={s.item}>Bogdan</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your day?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    );
};
