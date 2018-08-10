import { SEARCH, CLEAN } from '../constants/actions';

export const searchAction = text => ( { type: SEARCH, payload: text });

export const cleanAction = () => ( { type: CLEAN });
