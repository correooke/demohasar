import { combineReducers } from 'redux';
import { users, loadUser } from './users';

export default combineReducers({ 
    users,
    loadUser
});