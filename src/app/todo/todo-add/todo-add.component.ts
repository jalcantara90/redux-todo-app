import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  
  txtInput : FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  addTodo() {
    if (this.txtInput.invalid) {
      return;
    }

    const action = new todoActions.AddTodoAction( this.txtInput.value );
    this.store.dispatch( action );

    this.txtInput.reset();

  }

}
