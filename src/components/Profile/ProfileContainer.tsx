import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "2";
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

type PathParamsType = {
    userId: string
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
type CommonPropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & mapDispatchPropsType
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
