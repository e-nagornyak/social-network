import React from 'react';
import s from "./ProfileStatus.module.css";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
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
                    <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
            }


        </div>
    }
}
