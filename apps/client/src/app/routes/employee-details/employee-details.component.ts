import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';

@Component({
	selector: 'precise-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {

	employeeId!: number;
	employee$!: Observable<any>;

	constructor(private route: ActivatedRoute, private employeesService: EmployeesService) {}

	ngOnInit() {
		if (!this.route.snapshot.paramMap.has('employeeId')) return;

		this.employeeId = +(this.route.snapshot.paramMap.get('employeeId') as string);
		this.employee$ = this.employeesService.getEmployeeDetails(this.employeeId);
	}

}
