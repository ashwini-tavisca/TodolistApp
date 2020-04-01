import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NotesComponent } from './notes/notes.component';


const routes: Routes = [
  {path: 'todos', component: TodoComponent},
  {path: "notes", component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoComponent, NotesComponent]
