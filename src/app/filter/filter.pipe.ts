import { Pipe, PipeTransform } from '@angular/core';

import * as filterAction from './filter.actions';
import { Todo } from './../todo/model/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todoList: Todo[], filter:  filterAction.validFilters ): Todo[] {
    
    switch( filter ) {
      case 'completed':
        return todoList.filter( todo => todo.complete);

      case 'pendant':
        return todoList.filter( todo => !todo.complete);

      default:
        return todoList
    }
  }

}
