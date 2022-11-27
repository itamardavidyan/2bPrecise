import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'libs/interfaces/src';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';

@Component({
	selector: 'employee-tasks',
	templateUrl: './employee-tasks.component.html',
	styleUrls: ['./employee-tasks.component.css'],
})
export class EmployeeTasksComponent {

	employeeId!: number;
	employeeTasks$!: Observable<ITask[]>;

	constructor(private route: ActivatedRoute, private employeesService: EmployeesService) {}

	ngOnInit() {
		if (!this.route.snapshot.paramMap.has('employeeId')) return;

		this.employeeId = +(this.route.snapshot.paramMap.get('employeeId') as string);

		this.employeeTasks$ = this.employeesService.getEmployeeTasks(this.employeeId);
	}
}
