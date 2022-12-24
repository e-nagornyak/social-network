import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
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
    getUserProfile: (userId: string) => void
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
export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)
