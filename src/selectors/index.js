import { createSelector } from "reselect";

export const searchTextSelector = state => state.search.searchText;

export const currentUserSelector = createSelector(state => state.loadUser.currentUser, user => user);