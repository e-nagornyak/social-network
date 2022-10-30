import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LeftBar} from "./components/LeftBar/LeftBar";
import {RightBar} from "./components/RightBar/RightBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

import {StateType} from "./redux/state";

import s from './App.module.css';


type AppPropsType = {
    state: StateType
}

export const App = (props: AppPropsType) => {
    const {DialogsPage} = props.state
    const {profilePage} = props.state

    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <LeftBar/>
                <RightBar/>
                <div className={s.content}>
                    <Route path={'/profile'} render={() => <Profile data={profilePage}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs data={DialogsPage}/>}/>

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

