import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee, ITask } from 'libs/interfaces/src';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

	constructor(private http: HttpClient) { }

	public getEmployees(): Observable<IEmployee[]> {
		return this.http.get<IEmployee[]>('http://localhost:3333/api/employees');
	}

	public getEmployeeDetails(employeeId: number): Observable<IEmployee> {
		return this.http.get<IEmployee>(`http://localhost:3333/api/employees/${employeeId}`);
	}

	public getEmployeeManager(employeeId: number): Observable<IEmployee> {
		return this.http.get<IEmployee>(`http://localhost:3333/api/employees/${employeeId}/manager`)
	}

	public createReport(employeeId: number, text: string): Observable<void> {
		return this.http.post<void>(`http://localhost:3333/api/employees/${employeeId}/report`, { text });
	}

	public getEmployeeTasks(employeeId: number): Observable<ITask[]> {
		return this.http.get<ITask[]>(`http://localhost:3333/api/employees/${employeeId}/tasks`)
	}

}
