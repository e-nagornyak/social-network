import React, {ChangeEvent} from 'react';
// import s from "./ProfileStatus.module.css";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
type stateType = {
    editMode: false, status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: stateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: stateType) {
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
            }


        </div>
    }
}
