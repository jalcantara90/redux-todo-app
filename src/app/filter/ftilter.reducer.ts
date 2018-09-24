import * as filterAction from './filter.actions';

const initialState: filterAction.validFilters = 'all';

export function filterReducer( state = initialState, action: filterAction.actions) {
    switch(action.type) {
        case filterAction.SET_FILTRO:
            return action.filter;

        default:
            return state;
    }
}