export const DELETE_USER = Symbol();
export const ADD_USER = Symbol();


export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: {
            id
        }
    };
};


export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: {
            user
        }
    };
};
