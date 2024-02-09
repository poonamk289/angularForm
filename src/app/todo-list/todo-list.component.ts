import { Component } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
   constructor(public todosrv:TodoListService ){} 
   todo :string = ""; 
   todo1:string ="";

addTodo(){
  console.log(this.todo,this.todo1);
 this.todosrv.allTodo.push(this.todo);
 this.todosrv.all.push(this.todo1);
 this.todo=""
 this.todo1=""


}






}
