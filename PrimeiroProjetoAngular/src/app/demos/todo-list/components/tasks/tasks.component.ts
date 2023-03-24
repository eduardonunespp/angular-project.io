import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable } from 'rxjs';
import { Task } from '../../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  todoList$: Observable<any[]>

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.todoList$ = this.taskService.getTodoList$      
  }
}
