import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable, map, pipe } from 'rxjs';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.css']
})
export class TasksFinalizadasComponent implements OnInit {

  finalizado$: Observable<any[]>

  constructor (private tasksService: TasksService, private store: Store ) {

  }

  ngOnInit(): void {
      this.finalizado$ = this.store.getTodoList()
      .pipe(
      map(todolist => todolist.filter(task => task.finalizado))
      )
      
  }

}
