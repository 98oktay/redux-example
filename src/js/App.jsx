import React from "react";
import AddUser from "./components/AddUser.jsx";
import Header from "./components/Header.jsx";
import Listing from "./components/Listing.jsx";
import { Provider } from 'react-redux';
import store from "./store.js";

export default class App extends React.Component {

    render() {
        return <Provider store={store}>
            <Header/>
            <div className="container">
                <Listing/>
                <hr />
                <AddUser/>
            </div>
        </Provider>
    }
}
