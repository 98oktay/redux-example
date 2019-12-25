import {ADD_USER, FILTER_USER, REMOVE_USER, SELECT_USER, UPDATE_USER} from "../actions";

function userDataReducer(state = {users: [], editUserId: null}, action) {
    switch (action.type) {
        case ADD_USER:
            return Object.assign({}, state,
                {
                    users: [...state.users, action.user]
                });
        case REMOVE_USER:
            return Object.assign({}, state,
                {
                    users: state.users.filter((item, index) => index !== action.id),
                    editUserId: null
                });
        case SELECT_USER:
            return Object.assign({}, state,
                {
                    editUser: state.users.filter((item, index) => index === action.id).pop(),
                    editUserId: action.id
                });
        case FILTER_USER:
            return Object.assign({}, state,
                {
                    filterText: action.text,
                });
        case UPDATE_USER:
            return Object.assign({}, state,
                {
                    users: state.users.map((item, index) => {
                        if (index === state.editUserId) {
                            return {...action.user}
                        }
                        return item
                    }),
                    editUser: {},
                    editUserId: null
                });
        default:
            return state;
    }
}

export default userDataReducer;
