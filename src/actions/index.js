import { createAction } from 'redux-actions';
import {
    ADD_USER,
    EDIT_USER,
    SELECT_USER,
    REMOVE_USER,
    SEARCH_USER,
    LOAD_USERS,
    LOAD_USER,
    CLEAN_USER,
} from '../constants/actions';

import { URL_BASE } from './../constants/api';
import transform from './../services/transform';
import API from './../api/index';

export const addUser = ({ title, details }) => ( { type: ADD_USER, payload: { title, details } } );

export const editUser = ({ code, title, details }) => ( { type: EDIT_USER, payload: { code, title, details } } );

export const selectUser = code => ( { type: SELECT_USER, payload: code } );

export const removeUser = code => ( { type: REMOVE_USER, payload: code } );

export const searchUser = searchText => ( { type: SEARCH_USER, payload: searchText } );

export const loadUsers = () => dispatch => (
    fetch(URL_BASE).then(data => data.json()).then(data => {
        dispatch({ type: LOAD_USERS, payload: transform(data) }); 
    }));

export const loadUser = createAction(LOAD_USER, API.LoadUser);
/*
export const loadUser = userCode => ({ 
        type: LOAD_USER, 
       
        payload: fetch(`${URL_BASE}?login.uuid=${userCode}`).then(data => data.json())
    });*/ 

export const cleanUser = () => ({
    type: CLEAN_USER
});
    /*
.then(data => {
        const items = transform(data);
        const item = items && items[0];
        dispatch({ type: LOAD_USER, payload: item }); 
    }
    */




