import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import s from './App.module.css';
import {DialogsType, MessagesType, PostsType} from "./index";


type AppPropsType = {
    posts: PostsType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const App = (props: AppPropsType) => {
    const {posts,dialogs, messages} = props

    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

