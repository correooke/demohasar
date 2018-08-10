import { combineReducers } from 'redux';
import { SEARCH, CLEAN } from '../constants/actions';

const initialState = { searchText: '' };

const search = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH: 
            return { ...state, searchText: action.payload, cleaned: false };
        case CLEAN: 
            return { ...state, searchText: '', cleaned: true };
        default:
            return state;
    }
}


export default combineReducers({ 
    search: search,
});