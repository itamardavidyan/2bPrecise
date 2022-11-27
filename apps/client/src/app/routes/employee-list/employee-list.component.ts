import { Component, OnInit } from '@angular/core';
import { Employee } from 'libs/interfaces/src';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';

@Component({
	selector: 'employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

	employees$!: Observable<Employee[]>;

	constructor(private employeesService: EmployeesService) {}

	ngOnInit() {
		this.employees$ = this.employeesService.getEmployees();
	}

}
