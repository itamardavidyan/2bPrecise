import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateReportComponent } from '../../components/dialogs/create-report/create-report.component';

@Component({
	selector: 'employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {

	employeeId!: number;
	employee$!: Observable<any>;

	constructor(private route: ActivatedRoute, private employeesService: EmployeesService, public dialog: MatDialog) {}

	ngOnInit() {
		if (!this.route.snapshot.paramMap.has('employeeId')) return;

		this.employeeId = +(this.route.snapshot.paramMap.get('employeeId') as string);
		this.employee$ = this.employeesService.getEmployeeDetails(this.employeeId);
	}

	openDialog(): void {
		this.dialog.open(CreateReportComponent, { data: { employeeId: this.employeeId } });
	}
}
