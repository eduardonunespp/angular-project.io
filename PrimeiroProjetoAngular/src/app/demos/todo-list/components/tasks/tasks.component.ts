import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable, Subscription, map } from 'rxjs';
import { Task } from '../../task';
import { Store } from '../../todo.store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {


  todoList$: Observable<any[]>

  subscription: Subscription

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit(): void {
    this.todoList$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado))
    )

    this.subscription = this.taskService.getTodoList$.subscribe()
    
    
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
