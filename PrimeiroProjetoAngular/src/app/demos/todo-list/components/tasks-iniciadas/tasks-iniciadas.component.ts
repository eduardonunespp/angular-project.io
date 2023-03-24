import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {

  iniciadas$: Observable<any[]>

  constructor(private tasksList: TasksService) {

  }

  ngOnInit(): void {
      this.iniciadas$ = this.tasksList.getTodoList$
  }

}
