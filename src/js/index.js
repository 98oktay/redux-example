import "../css/style.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "../store.js";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("react-element"));


