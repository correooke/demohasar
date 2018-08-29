import { createSelector } from "reselect";

export const searchTextSelector = state => state.search.searchText;

const usersSelector = createSelector(state => state.users, users => users);

export const currentUserSelector = createSelector(usersSelector, state => state.users.currentUser, 
    (users, userCode) => users.items && users.items[userCode]);

export const usersSearchedSelector = createSelector(usersSelector, users => 
    users.items && users.itemsSearched.map(code => users.items[code]));

export const selectedItemSelector = createSelector(usersSelector, users => users.items && users.items[users.selectedItem]);

export const searchUserSelector = createSelector(usersSelector, users => users.search);

export const sortCriteriaSelector = createSelector(usersSelector, users => users.sortCriteria);

