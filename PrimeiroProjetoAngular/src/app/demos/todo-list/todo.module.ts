import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TasksService } from "./todo.service";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';




@NgModule({
  declarations: [
    TodoListComponent,
    TasksIniciadasComponent,
    TasksComponent,
    TodoListComponent,
    TasksFinalizadasComponent
],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TasksService
  ],
  exports: [
    TodoListComponent,
    TasksIniciadasComponent,
    TasksComponent,
    TodoListComponent,
    TasksFinalizadasComponent
  ]


})
export class TodoModule {}