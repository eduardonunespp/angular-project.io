import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable, map } from 'rxjs';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.css']
})
export class TasksIniciadasComponent implements OnInit {

  iniciadas$: Observable<any[]>

  constructor(private tasksList: TasksService, private store: Store) {

  }

  ngOnInit(): void {
      this.iniciadas$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
      )

      console.log('valor retornado: ' + this.iniciadas$)
  }

}
