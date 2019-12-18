import { Action, createReducer, on } from '@ngrx/store';

import { setFilter } from '../actions/filter.actions';
import { Filter } from '../../shared/models';

export const initialState: Filter = {
    searchQuery: 'avocado',
    imageType: 'all',
    order: 'popular'
};

const filterReducer = createReducer(
    initialState,
    on(setFilter, (state, newFilter) => ({ searchQuery: newFilter.searchQuery, imageType: newFilter.imageType, order: newFilter.order }))
);

export function reducer(state: Filter | undefined, action: Action) {
    return filterReducer(state, action);
}
