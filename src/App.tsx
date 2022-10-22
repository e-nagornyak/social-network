import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import s from './App.module.css';


const App = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    )
}

export default App;
