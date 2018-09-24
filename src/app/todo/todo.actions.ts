import { Action } from '@ngrx/store';
export const ADD_TODO = '[TODO] Add todo';
export const TOOGLE_TODO = '[TODO] Toogle todo';
export const TOOGLE_ALL_TODO = '[TODO] Toogle all todo';
export const EDIT_TODO = '[TODO] edit todo';
export const REMOVE_TODO = '[TODO] remove todo';
export const REMOVE_COMPLETED = '[TODO] remove completed';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor( public text: string) {}
}

export class ToogleTodoAction implements Action {
    readonly type = TOOGLE_TODO;

    constructor( public id: number ) {}
}

export class ToogleAllAction implements Action {
    readonly type = TOOGLE_ALL_TODO;

    constructor( public completed: boolean) {}
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor( public id: number, public text: string ) {}
}

export class DeleteTodoAction implements Action {
    readonly type = REMOVE_TODO;

    constructor( public id: number ) {}
}

export class RemoveCompletedTodo implements Action {
    readonly type = REMOVE_COMPLETED;
}

export type Actions = AddTodoAction |
                      ToogleTodoAction |
                      EditTodoAction |
                      DeleteTodoAction |
                      ToogleAllAction |
                      RemoveCompletedTodo;