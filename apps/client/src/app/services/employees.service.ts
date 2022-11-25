import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
