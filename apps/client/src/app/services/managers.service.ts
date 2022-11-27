import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee, IReportView } from 'libs/interfaces/src';

@Injectable({
  	providedIn: 'root'
})
export class ManagersService {

  	constructor(private http: HttpClient) { }

	public getManagerSubordinates(managerId: number): Observable<IEmployee[]> {
		return this.http.get<IEmployee[]>(`http://localhost:3333/api/managers/${managerId}/subordinates`);
	}

	public getManagerSubordinatesReports(managerId: number): Observable<IReportView[]> {
		return this.http.get<IReportView[]>(`http://localhost:3333/api/managers/${managerId}/subordinates/reports`);
	}

}
