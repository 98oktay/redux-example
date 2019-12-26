import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-solid-svg-icons'

export default class Listing extends React.Component {

    state = {
        users: [
            {first: "Oktay", last: "Başkuş", age: 30},
            {first: "Veronica", last: "Joseph", age: 34},
            {first: "Lindsay", last: "Holt", age: 25},
            {first: "Morris", last: "Castaneda", age: 35}
        ]
    };

    render() {
        const users = this.state.users;
        return <><h4>Listing</h4>
            <div className="card border-success">
                <table className="table table-striped table-borderless table-sm">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Age</th>
                        <th scope="col">Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!users.length && <tr><td colSpan={5} className="text-center">Empty list</td></tr>}
                    {users.map((item, key) =>
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{item.first}</td>
                            <td>{item.last}</td>
                            <td>{item.age}</td>
                            <td width="150">
                                <div className="d-flex">
                                <button type="button" className="btn btn-primary btn-sm">
                                    <FontAwesomeIcon icon={Icons.faEdit}/> Edit
                                </button>
                                <button type="button" className="btn btn-danger btn-sm ml-auto">
                                    <FontAwesomeIcon icon={Icons.faTrash}/> Del
                                </button>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    }
}
