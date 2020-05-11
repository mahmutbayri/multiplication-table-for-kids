import './scss/app.scss'
import React from "react";
import ReactDOM from "react-dom";
import store from './store';
import {Provider} from 'react-redux'
import HelloMessage from './HelloMessage';

let root = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <HelloMessage lal={5} />
    </Provider>
    , root
);

window.store = store;


