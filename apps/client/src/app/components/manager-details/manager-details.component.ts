import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'libs/interfaces/src';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';

@Component({
	selector: 'manager-details',
	templateUrl: './manager-details.component.html',
	styleUrls: ['./manager-details.component.css'],
})
export class ManagerDetailsComponent implements OnInit {

	@Input() employeeId!: number;

	manager$!: Observable<IEmployee>;

	constructor(private employeesService: EmployeesService) {}

	ngOnInit() {
		this.manager$ = this.employeesService.getEmployeeManager(this.employeeId);
	}

}
