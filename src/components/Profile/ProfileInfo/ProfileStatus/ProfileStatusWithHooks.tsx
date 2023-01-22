import React, {ChangeEvent, useEffect, useState} from 'react';
// import s from "./ProfileStatus.module.css";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
type stateType = {
    editMode: boolean,
    status: string
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const [error, setError] = useState(false)

    const activateEditMode = () => setEditMode(true)


    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        if (status.trim() !== '') {
            setEditMode(false)
            props.updateUserStatus(status)
            setError(false)
        } else {
            setError(true)
        }
    }
    useEffect(() => {
            setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input style={{border: error ? "3px solid red" : ''}}
                           autoFocus onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}
