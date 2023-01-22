import React, {ChangeEvent, useState} from 'react';
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

    const activateEditMode = () => setEditMode(true)


    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    // componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: stateType) {
    //     if (prevProps.status !== this.props.status){
    //         this.setState({status: this.props.status})
    //     }
    // }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}
