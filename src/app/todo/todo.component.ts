import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 1;
  status: string = "";
  //filteredTodoList: ITodo [] = [];

  constructor(
    private activatedroute: ActivatedRoute,
    private TodoService: TodoService) {

  }

  ngOnInit() {
    this.todoTitle = '';
    this.todoId = 1;
    this.TodoService.addTodoItem(
      {id: 0, 
        title: 'Install Angular CLI', 
        isDone: false, 
        isDoing: false, 
        isEditing: false},)
    this.todoList = this.TodoService.getTodoItems();

    
   this.activatedroute.paramMap.subscribe(params =>{
    this.status = params.get("status")
    //this.filteredArray(status)
   

   })
  }

get filteredArray():ITodo[]{
 if(!this.status){
     
      return this.TodoService.todoList; 
    } else {
      return this.TodoService.todoList.filter(x=> status === 'done' ? x.isDone: !x.isDone);
    }
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
