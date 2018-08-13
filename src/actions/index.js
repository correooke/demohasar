import {
    ADD_USER,
    EDIT_USER,
    SELECT_USER,
    REMOVE_USER,
    SEARCH_USER,
    LOAD_USERS,
} from '../constants/actions';

export const addUser = ({ title, details }) => ( { type: ADD_USER, payload: { title, details } } );

export const editUser = ({ code, title, details }) => ( { type: EDIT_USER, payload: { code, title, details } } );

export const selectUser = code => ( { type: SELECT_USER, payload: code } );

export const removeUser = code => ( { type: REMOVE_USER, payload: code } );

export const searchUser = searchText => ( { type: SEARCH_USER, payload: searchText } );

export const loadUsers = () => ( { type: LOAD_USERS } );



