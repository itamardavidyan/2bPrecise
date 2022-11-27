import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'libs/interfaces/src';
import { Observable } from 'rxjs';
import { ManagersService } from '../../services/managers.service';
import { MatDialog } from '@angular/material/dialog';
import { AssignTaskComponent } from '../dialogs/assign-task/assign-task.component';

@Component({
	selector: 'manager-subordinates',
	templateUrl: './manager-subordinates.component.html',
	styleUrls: ['./manager-subordinates.component.css'],
})
export class ManagerSubordinatesComponent {

	managerId!: number;
	managerSubordinates$!: Observable<Employee[]>;

	constructor(private route: ActivatedRoute, private managersService: ManagersService, public dialog: MatDialog) {}

	ngOnInit() {
		if (!this.route.snapshot.paramMap.has('employeeId')) return;

		this.managerId = +(this.route.snapshot.paramMap.get('employeeId') as string);
		this.managerSubordinates$ = this.managersService.getManagerSubordinates(this.managerId);
	}

	openDialog(employeeId: number): void {
		this.dialog.open(AssignTaskComponent, { data: { managerId: this.managerId, employeeId } });
	}

}
