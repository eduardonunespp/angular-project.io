import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.css']
})
export class TasksFinalizadasComponent implements OnInit {

  finalizado$: Observable<any[]>

  constructor (private tasksService: TasksService ) {

  }

  ngOnInit(): void {
      this.finalizado$ = this.tasksService.getTodoList$
  }

}
