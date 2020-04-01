import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todoList : string[] = [];
  todoObejct= {
    todoList : []
  }
  savedLists = [];
  pushItemToTodoList = function (todo) {
    if(todo != null) {
      this.todoList.push(todo);
    }
  }
  removeTodo = function (index) {
    this.todoList.splice(index,1);
  }
  saveList = function () {
  console.log("Saved list is :: " + this.savedLists);
  this.todoObejct = this.todoList;
    this.savedLists.push(this.todoObejct);
    this.todoList = [];
  }
}
