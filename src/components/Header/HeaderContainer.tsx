import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/reducers/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component<MapStatePropsType & mapDispatchPropsType, AppStateType> {

    render() {
        return <Header {...this.props}/>
    }
}

export type mapDispatchPropsType = {
    logout: () => void
}
export type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {logout} ))
(HeaderContainer)

