import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {addPost, StateType} from "./redux/state";
import {App} from "./App";

export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPostCallback={addPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}