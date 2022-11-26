import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, ReportView } from 'libs/interfaces/src';

@Injectable({
  	providedIn: 'root'
})
export class ManagersService {

  	constructor(private http: HttpClient) { }

	public getManagerSubordinates(managerId: number): Observable<Employee[]> {
		return this.http.get<Employee[]>(`http://localhost:3333/api/managers/${managerId}/subordinates`);
	}

	public getManagerSubordinatesReports(managerId: number): Observable<ReportView[]> {
		return this.http.get<ReportView[]>(`http://localhost:3333/api/managers/${managerId}/subordinates/reports`);
	}

}
