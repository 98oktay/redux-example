import React from "react";
import {connect} from "react-redux";
import {filterUser} from "../../actions";

class Search extends React.Component {

    render() {
        return <div className="form-inline my-2 my-lg-0">
            <input onChange={(event) => this.props.filterUser(event.target.value)} className="form-control" type="search"
                   placeholder="Search" aria-label="Search"/>
        </div>
    }
}


const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, {filterUser})(Search);
