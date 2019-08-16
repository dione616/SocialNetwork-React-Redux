import React from 'react';
import './index.css';
import state, {subscribe} from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import {
    addMessage,
    addPost,
    updateNewPostText,
    updateNewMessageText,
} from "./redux/state";
import * as serviceWorker from "./serviceWorker";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

subscribe(rerenderEntireTree)//function with callback rerenderEntireTree

rerenderEntireTree(state)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
