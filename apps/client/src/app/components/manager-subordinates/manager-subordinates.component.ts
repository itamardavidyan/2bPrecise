import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'libs/interfaces/src';
import { Observable } from 'rxjs';
import { ManagersService } from '../../services/managers.service';

@Component({
	selector: 'manager-subordinates',
	templateUrl: './manager-subordinates.component.html',
	styleUrls: ['./manager-subordinates.component.css'],
})
export class ManagerSubordinatesComponent {

	employeeId!: number;
	managerSubordinates$!: Observable<Employee[]>;

	constructor(private route: ActivatedRoute, private managersService: ManagersService) {}

	ngOnInit() {
		if (!this.route.snapshot.paramMap.has('employeeId')) return;

		this.employeeId = +(this.route.snapshot.paramMap.get('employeeId') as string);
		this.managerSubordinates$ = this.managersService.getManagerSubordinates(this.employeeId);
	}

}
