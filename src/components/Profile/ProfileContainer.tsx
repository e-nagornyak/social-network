import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/reducers/profileReducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component<any, any> {
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

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)


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
        profile: state.profilePage.profile,
    }
}
// type CommonPropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & mapDispatchPropsType

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)

