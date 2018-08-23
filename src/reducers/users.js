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
import { handleAction, handleActions } from 'redux-actions';
import keys from 'lodash/keys';

const initialState = {
  items: null,
  itemsSearched: null,
  selectedItem: null, 
  search: '',       
};

const applySearch = (items, search) => 
items.filter(item => item.title.toUpperCase().includes(search.toUpperCase()));

// (state = initialState, { type, payload })
export const users = handleActions({
    [ADD_USER]: (state, { type, payload }) => {
            
        const { title, details } = payload;
        const code = uuid();
        const items = [ ...state.items, { code, title, details }];
        return { 
            ...state, 
            items,
            itemsSearched: items,
            search: '', 
        };        
    },
    [EDIT_USER]: (state, { type, payload }) => {
        const { code, title, details } = payload;
        const itemsDel = state.items.filter( item => item.code !== code);
        const items = [ ...itemsDel, { code, title, details }];
        return {
            ...state, 
            items,
            itemsSearched: items,
            selectedItem: null,
            search: '', 
        };
    },
    [SELECT_USER]: (state, { type, payload }) => {
        const code = payload;
        return {
            ...state, 
            selectedItem: state.items.find( item => item.code === code) 
        };
    },
    [REMOVE_USER]: (state, { type, payload }) => {
        const code = payload;

        const items = state.items.filter( item => item.code !== code);
        return {
            ...state, 
            items, 
            itemsSearched: applySearch(items, state.search), 
            selectedItem: null 
          };           
    },
    [SEARCH_USER]: (state, { type, payload }) =>  {
        const searchText = payload;
        return {
            ...state,
            search: searchText,
            itemsSearched: applySearch(state.items, searchText)
        };
    },
    [LOAD_USERS]: (state, { type, payload }) => {
        const items = normalize(transform(payload));
        const itemsSearched = keys(items);
        debugger;
        return { ...state,
            items: { ...state.items, ...items }, 
            itemsSearched
        }; 
    },
    [LOAD_USER]: (state, { type, payload }) => {
        const items = transform(payload);
        const item = items && items[0];
        debugger;
        return { ...state,
            currentUser: item.code,
            items: { ...state.items, [item.code]: item }
        };        
    },
    [CLEAN_USER]: (state, { type, payload }) => {
        return {
            ...state, 
            currentUser: null,
        };
    },
}, initialState);
   
