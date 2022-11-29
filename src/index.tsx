import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {App} from "./App";
import {Provider} from "react-redux";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderTree()
store.subscribe(renderTree)