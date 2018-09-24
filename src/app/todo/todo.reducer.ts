import * as todoAction from './todo.actions';
import { Todo } from './model/todo.model';

const initialState: Todo[] = [ new Todo('Vencer a Thanos'), new Todo('Salvar al mundo'), new Todo('Pedir prestado el traje a Ironman')];

export function todoReducer (state = initialState, action: todoAction.Actions): Todo[] {

    switch( action.type ) {
        case todoAction.ADD_TODO:
            const todo = new Todo( action.text );
            return [ ...state, todo ];

        case todoAction.TOOGLE_TODO:
            return state.map( todoEdit => {
                    if( todoEdit.id === action.id )
                        return {
                            ...todoEdit,
                            complete: !todoEdit.complete
                        };
    
                    return todoEdit;
                })

        case todoAction.EDIT_TODO:
            return state.map( todoEdit => {
                if( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        text: action.text
                    }
                }
    
                return todoEdit;
            })

        case todoAction.REMOVE_TODO:
            return state.filter( removedTodo => removedTodo.id !== action.id );

        case todoAction.TOOGLE_ALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    complete: action.completed
                }
            })

        case todoAction.REMOVE_COMPLETED: 
            return state.filter( removeTodo => !removeTodo.complete);

        default:
            return state;
    }

} 