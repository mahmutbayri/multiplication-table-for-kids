import './scss/app.scss'
import React from "react";
import ReactDOM from "react-dom";
import store from './store';
import {Provider} from 'react-redux'
import App from './components/App';

let root = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , root
);

window.store = store;


