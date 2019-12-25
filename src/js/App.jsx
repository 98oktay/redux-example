import React from "react";
import AddUser from "./components/AddUser.jsx";
import Header from "./components/Header.jsx";
import Listing from "./components/Listing.jsx";

export default class App extends React.Component {

    render() {
        return <>
            <Header/>
            <div className="container">
                <Listing/>
                <hr />
                <AddUser/>
            </div>
        </>
    }
}
