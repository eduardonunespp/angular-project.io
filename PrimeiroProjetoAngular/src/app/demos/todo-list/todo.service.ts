import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Task } from "./task";
import { Observable, tap } from "rxjs";
import { Store } from "./todo.store";




@Injectable()
export class TasksService {

  constructor(private http: HttpClient, private store: Store){ }

    getTodoList$: Observable<Task[]> = this.http.get<Task[]>('http://localhost:3000/todolist')
    .pipe(
      tap(next => this.store.set('todolist', next))
    )
    // getToDoList(): Observable<Task[]>{
    //   return this.http
    //   .get<Task[]>('http://localhost:3000/todolist')
    // } 
  

}