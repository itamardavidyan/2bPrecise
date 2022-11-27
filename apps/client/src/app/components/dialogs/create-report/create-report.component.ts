import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../../../routes/employee-details/employee-details.component';
import { EmployeesService } from '../../../services/employees.service';

@Component({
	selector: 'create-report',
	templateUrl: './create-report.component.html',
	styleUrls: ['./create-report.component.css'],
})
export class CreateReportComponent {

	text!: string;

	constructor(
		private employeesService: EmployeesService,
		public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { employeeId: number }
	) {}

	cancel(): void {
		this.dialogRef.close();
	}

	save(): void {
		this.employeesService.createReport(this.data.employeeId, this.text).subscribe(() => {
			this.dialogRef.close();
		})
	}

}
