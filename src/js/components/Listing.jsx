import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {removeUser, selectUser} from "../../actions";

class Listing extends React.Component {

    state = {
        items: [
            {first: "Oktay", last: "Başkuş", age: 30}
        ]
    };

    getUsers = () => {
        const filterText = this.props.filterText;
        const users = !filterText ? this.props.users : this.props.users.filter((user) => {
            const userFullName = `${user.first} ${user.last} ${user.age}`;
            if (userFullName.indexOf(filterText) !== -1) {
                return true
            }
            return false
        });

        return users;
    };

    render() {
        const users = this.getUsers();

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
                    {users.map((item, key) =>
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{item.first}</td>
                            <td>{item.last}</td>
                            <td>{item.age}</td>
                            <td width="150">
                                <div className="d-flex">
                                    <button type="button" onClick={() => this.props.selectUser(key)}
                                            className="btn btn-primary btn-sm">
                                        <FontAwesomeIcon icon={Icons.faEdit}/> Edit
                                    </button>
                                    <button type="button" onClick={() => this.props.removeUser(key)}
                                            className="btn btn-danger btn-sm ml-auto">
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

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, {removeUser, selectUser})(Listing);

