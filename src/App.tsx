import React from 'react';
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LeftBar} from "./components/LeftBar/LeftBar";
import {RightBar} from "./components/RightBar/RightBar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import s from './App.module.css';



export const App = () => {
    //JSX
    return (
        <div className={s.wrapper}>
            <Header/>
            <LeftBar/>
            <RightBar/>
            <div className={s.content}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>


                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    )
}

