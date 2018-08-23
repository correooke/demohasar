import { createSelector } from "reselect";

export const searchTextSelector = state => state.search.searchText;

export const currentUserSelector = createSelector(state => state.users && state.users.items && state.users.items[state.users.currentUser], user => user);