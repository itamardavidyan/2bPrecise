import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'libs/interfaces/src';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

	constructor(private http: HttpClient) { }

	public getEmployees(): Observable<any> {
		return this.http.get('http://localhost:3333/api/employees');
	}

	public getEmployeeDetails(employeeId: number): Observable<any> {
		return this.http.get(`http://localhost:3333/api/employees/${employeeId}`);
	}

	public getEmployeeManager(employeeId: number): Observable<any> {
		return this.http.get(`http://localhost:3333/api/employees/${employeeId}/manager`)
	}

	public createReport(employeeId: number, text: string): Observable<any> {
		return this.http.post(`http://localhost:3333/api/employees/${employeeId}/report`, { text });
	}

	public getEmployeeTasks(employeeId: number): Observable<Task[]> {
		return this.http.get<Task[]>(`http://localhost:3333/api/employees/${employeeId}/tasks`)
	}

}
