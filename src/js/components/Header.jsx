import React from "react";
import Search from "./Search.jsx";

export default class Header extends React.Component {

    render() {
        return <nav className="navbar navbar-dark bg-dark mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">Redux Example</a>
                <Search />
            </div>
        </nav>
    }
}
