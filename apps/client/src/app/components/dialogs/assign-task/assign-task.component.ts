import { Component, Inject } from '@angular/core';
import { TasksService } from '../../../services/tasks.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManagerDetailsComponent } from '../../manager-details/manager-details.component';
import { ICreateTask } from 'libs/interfaces/src';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import * as dayjs from 'dayjs';

@Component({
	selector: 'assign-task',
	templateUrl: './assign-task.component.html',
	styleUrls: ['./assign-task.component.css'],
})
export class AssignTaskComponent {

	minDate: Date;
	taskForm: FormGroup = this.formBuilder.group({
		text: ['', Validators.required],
		dueDate: [dayjs.utc().startOf('day').toDate(), Validators.required]
	});

	constructor(
		private formBuilder: FormBuilder,
		private tasksService: TasksService,
		public dialogRef: MatDialogRef<ManagerDetailsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { employeeId: number, managerId: number }
	) {
    	this.minDate = dayjs.utc().startOf('day').toDate();
	}

	cancel(): void {
		this.dialogRef.close();
	}

	onFormSubmit() {
		if (this.taskForm.invalid) return;

		const { text, dueDate: dd } = this.taskForm.value;
		const dueDate = dayjs(dd).format('MM/DD/YYYY');
		const { managerId, employeeId } = this.data;
		const task: ICreateTask = { text, dueDate, employeeId, managerId };
		this.tasksService.createTask(task).subscribe(() => {
			this.dialogRef.close();
		})
	}

}
