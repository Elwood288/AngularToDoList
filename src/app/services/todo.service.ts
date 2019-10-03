import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  todoList: ITodo [] = [];
  deleteTodoItem(todo:any):void {
    console.log("delete methods was called in todo.services" + todo)
    const index = this.todoList.findIndex(todoItem => todoItem === todo)
    this.todoList.splice(index, 1);
}

getTodoItems() {
  return this.todoList;
}

addTodoItem(todo: ITodo):void {
  this.todoList.push({
    id: todo.id,
    title: todo.title,
    isDone: false,
    isDoing: false,
    isEditing: false
  });
}
}
