import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  
  todoList: Todo[];
  filter: string;
  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    this.store.subscribe( state => {
      this.todoList = state.todos
      this.filter = state. filter;
    });
  }

}
