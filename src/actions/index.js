export const ADD_USER = 'ADD_USER'; // action types
export const REMOVE_USER = 'REMOVE_USER'; // action types
export const SELECT_USER = 'SELECT_USER'; // action types
export const UPDATE_USER = 'UPDATE_USER'; // action types
export const FILTER_USER = 'FILTER_USER'; // action types

export function addUser(user) {
    return {
        type: ADD_USER,
        user     // action payload
    }
}

export function removeUser(id) {
    return {
        type: REMOVE_USER,
        id     // action payload
    }
}

export function selectUser(id) {
    return {
        type: SELECT_USER,
        id     // action payload
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        user     // action payload
    }
}

export function filterUser(text) {
    return {
        type: FILTER_USER,
        text     // action payload
    }
}
