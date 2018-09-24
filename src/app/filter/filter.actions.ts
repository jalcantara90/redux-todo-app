import { Action } from '@ngrx/store';
export const SET_FILTRO = '[Filter] set filter';

export type validFilters = 'all' | 'completed' | 'pendant';

export class SetFilterAction implements Action {
    readonly type = SET_FILTRO;

    constructor( public filter: validFilters) {}
}

export type actions = SetFilterAction;
