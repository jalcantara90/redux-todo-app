import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/model/todo.model';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/ftilter.reducer';
import { validFilters } from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: validFilters;
}

export const combineReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}