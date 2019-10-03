import { Component } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service'

@Component({
  selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 1;

  constructor(
    private TodoService: TodoService) {

  }

  ngOnInit() {
    this.todoTitle = '';
    this.todoId = 1;
    this.TodoService.addTodoItem(
      {id: 0, title: 'Install Angular CLI', isDone: false, isDoing: false, isEditing: false},)
    this.todoList = this.TodoService.getTodoItems();
  }

    // utilizes the addTodoItem method in TodoService
    addTodo():void {
      this.TodoService.addTodoItem({
        id: this.todoId,
        title: this.todoTitle,
        isDone: false,
        isDoing: false,
        isEditing: false
      });

      this.todoTitle = '';
      this.todoId++;
    }

  
  
   // utilizes the deleteTodoItem method in TodoService
   deleteTodo(todo:any) {
    this.TodoService.deleteTodoItem(todo)
    
  }
}

