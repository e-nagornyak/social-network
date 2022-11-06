import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText, state, subscribe} from "./redux/state";
import {App} from "./App";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPostCallback={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
renderTree()
subscribe(renderTree)