import uuid from 'uuid/v1';
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
import { transform, normalize } from './../services/transform';
import { handleActions } from 'redux-actions';
import values from 'lodash/values';

const initialState = {
  items: null,
  itemsSearched: null,
  selectedItem: null, 
  search: '',       
};

const getUserCodes = users => users.map(u => u.code);

const sortUsers = users => users.sort((u1, u2) => u1.title.localeCompare(u2.title));

const applySearch = (items, search) => 
    items.filter(
        item => item.title.toUpperCase().includes(
            search.toUpperCase()));

export const users = handleActions({
    [ADD_USER]: (state, { payload }) => {
            
        const { title, details } = payload;
        const code = uuid();
        const items = { ...state.items, [code]: { code, title, details }};
        return { 
            ...state, 
            items,
            itemsSearched: getUserCodes(sortUsers(values(items))),
            search: '', 
        };        
    },
    [EDIT_USER]: (state, { payload }) => {
        const { code, title, details } = payload;
        const itemsOld = { ...state.items };
        delete itemsOld[code];
        const items = { ...itemsOld, [code]: { code, title, details } }
        return {
            ...state, 
            items,
            itemsSearched: getUserCodes(sortUsers(values(items))),
            selectedItem: null,
            search: '', 
        };
    },
    [SELECT_USER]: (state, { payload }) => {
        const code = payload;
        return {
            ...state, 
            selectedItem: code 
        };
    },
    [REMOVE_USER]: (state, { payload }) => {
        const code = payload;
        const items = { ...state.items };
        delete items[code];
        return {
            ...state, 
            items, 
            itemsSearched: getUserCodes(applySearch(sortUsers(values(items)), state.search)), 
            selectedItem: null 
          };           
    },
    [SEARCH_USER]: (state, { payload }) =>  {
        const searchText = payload;
        return {
            ...state,
            search: searchText,
            itemsSearched: getUserCodes(applySearch(values(state.items), searchText))
        };
    },
    [LOAD_USERS]: (state, { payload }) => {
        debugger;
        const items = normalize(transform(payload));
        const itemsSearched = getUserCodes(sortUsers(values(items)));
        debugger;
        return { ...state,
            items: { ...state.items, ...items }, 
            itemsSearched
        }; 
    },
    [LOAD_USER]: (state, { payload }) => {
        const items = transform(payload);
        const item = items && items[0];
        debugger;
        return { ...state,
            currentUser: item.code,
            items: { ...state.items, [item.code]: item }
        };        
    },
    [CLEAN_USER]: (state) => {
        return {
            ...state, 
            currentUser: null,
        };
    },
}, initialState);
   
