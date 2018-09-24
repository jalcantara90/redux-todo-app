import { Component, OnInit } from '@angular/core';
import * as filterActions from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { RemoveCompletedTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  validFilters: filterActions.validFilters[] = ['all' , 'completed', 'pendant'];
  currentFilter: filterActions.validFilters;
  pendant: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.currentFilter = state.filter;
      this.countPendant(state.todos);
    })

  }
  
  changeFilter( newFilter: filterActions.validFilters ) {
    const action = new filterActions.SetFilterAction( newFilter );

    this.store.dispatch( action );
  }

  countPendant( todos: Todo[] ) {
    this.pendant = todos.filter( todo => !todo.complete ).length
  }

  removeCompleted() {
    let action = new RemoveCompletedTodo();
    
    this.store.dispatch(action);
  }
}
