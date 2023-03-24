import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Task } from "./task";
import { Observable } from "rxjs";




@Injectable()
export class TasksService {

  constructor(private http: HttpClient){ }

    getTodoList$: Observable<Task[]> = this.http.get<Task[]>('http://localhost:3000/todolist')

    // getToDoList(): Observable<Task[]>{
    //   return this.http
    //   .get<Task[]>('http://localhost:3000/todolist')
    // } 
  

}