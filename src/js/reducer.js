import {ADD_USER, DELETE_USER} from "./actions";

const initialState = {
    users: [
        {first: "Oktay", last: "Başkuş", age: 30},
        {first: "Veronica", last: "Joseph", age: 34},
        {first: "Lindsay", last: "Holt", age: 25},
        {first: "Morris", last: "Castaneda", age: 35}
    ]
};

const reducer = (state = initialState, action) => {


    switch (action.type) {
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user, key) => key !== action.payload.id)
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user]
            }
    }

    console.log('reducer', state, action);
    return state;
};

export default reducer;
