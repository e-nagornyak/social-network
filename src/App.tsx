import React from 'react';
import {Route, RouteComponentProps, withRouter} from "react-router-dom";
import {LeftBar} from "./components/LeftBar/LeftBar";
import {RightBar} from "./components/RightBar/RightBar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import s from './App.module.css';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends React.Component<RouteComponentProps & MapStatePropsType & mapDispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className={s.wrapper}>
                <HeaderContainer/>
                <LeftBar/>
                <RightBar/>
                <div className={s.content}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>


                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)



type mapDispatchPropsType = {
    initializeApp: () => void
}

type MapStatePropsType = {
    initialized: boolean
}