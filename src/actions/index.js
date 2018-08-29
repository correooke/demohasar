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
    SELECT_SORT_CRITERIA,
} from '../constants/actions';

import API from './../api/index';

export const addUser = createAction(ADD_USER);

export const editUser = createAction(EDIT_USER);

export const selectUser = createAction(SELECT_USER);

export const removeUser = createAction(REMOVE_USER);

export const searchUser = createAction(SEARCH_USER);

export const loadUsers = createAction(LOAD_USERS, API.LoadUsers);

export const loadUser = createAction(LOAD_USER, API.LoadUser);

export const selectSortCriteria = createAction(SELECT_SORT_CRITERIA);

export const cleanUser = createAction(CLEAN_USER);





