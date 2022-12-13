import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileAPIComponent extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        debugger
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type MapStatePropsType = {
    profile: ProfileType | null
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let withUrlDataContainerComponent = withRouter<any, any>(ProfileAPIComponent)
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
