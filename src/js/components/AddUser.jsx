import React from "react";
import {connect} from "react-redux";
import {addUser} from "../actions";

class AddUser extends React.Component {

    state = {
        first: "",
        last: "",
        age: 10
    };


    saveUser = () => {

        this.props.addUser(this.state);
        this.setState({
            first: "",
            last: "",
            age: 10
        })

    };

    render() {
        const {first, last, age} = this.state;
        return <div className="card border-primary mb-3">
            <div className="card-header d-flex flex-row align-items-center">
                Add New User
                <button onClick={this.saveUser} className="btn btn-primary ml-auto">Save</button>
            </div>
            <form className="card-body">
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">First Name</label>
                    <input type="text" value={first} onChange={({target}) => this.setState({first: target.value})}
                           className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Last Name</label>
                    <input type="text" value={last} onChange={({target}) => this.setState({last: target.value})}
                           className="form-control" placeholder="Surname"/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Age: {age}</label>
                    <input type="range" value={age} onChange={({target}) => this.setState({age: target.value})}
                           className="custom-range"
                           id="customRange1"/>
                </div>
            </form>
        </div>
    }
}


const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {addUser})(AddUser);
