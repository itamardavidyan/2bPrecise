import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateTask } from 'libs/interfaces/src';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  	constructor(private http: HttpClient) { }

	public createTask(task: CreateTask): Observable<any> {
		return this.http.post(`http://localhost:3333/api/tasks`, task);
	}

}
