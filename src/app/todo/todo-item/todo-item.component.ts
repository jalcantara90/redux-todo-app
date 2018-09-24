import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToogleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  chkField: FormControl;
  txtInput: FormControl;
  @ViewChild('txtInputPhysic') txtInputPhysic: ElementRef;

  editing: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.complete );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkField.valueChanges
      .subscribe( value => { 
        const action = new ToogleTodoAction( this.todo.id );
        this.store.dispatch(action);
      
      });
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputPhysic.nativeElement.select();
    }, 1)
  }

  endEdit() {
    this.editing = false;
    
    if ( this.txtInput.invalid ){
      return
    }
    
    if (this.txtInput.value === this.todo.text ) {
      return;
    }

    let action = new EditTodoAction( this.todo.id , this.txtInput.value );
    this.store.dispatch(action);
  }

  removeTodo() {
    let action = new DeleteTodoAction( this.todo.id );

    this.store.dispatch(action);
  }

}
