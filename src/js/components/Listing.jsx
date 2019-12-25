import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-solid-svg-icons'

export default class Listing extends React.Component {

    state = {
        items: [
            {first: "Oktay", last: "Başkuş", age: 30}
        ]
    };

    render() {
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
                    {this.state.items.map((item, key) =>
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
