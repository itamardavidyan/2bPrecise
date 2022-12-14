import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReportView } from 'libs/interfaces/src';
import { Observable } from 'rxjs';
import { ManagersService } from '../../services/managers.service';

@Component({
	selector: 'manager-subordinates-reports',
	templateUrl: './manager-subordinates-reports.component.html',
	styleUrls: ['./manager-subordinates-reports.component.css'],
})
export class ManagerSubordinatesReportsComponent implements OnInit {

	employeeId!: number;
	managerSubordinatesReports$!: Observable<IReportView[]>;

	constructor(private route: ActivatedRoute, private managersService: ManagersService) {}

	ngOnInit() {
		if (!this.route.snapshot.paramMap.has('employeeId')) return;

		this.employeeId = +(this.route.snapshot.paramMap.get('employeeId') as string);
		this.managerSubordinatesReports$ = this.managersService.getManagerSubordinatesReports(this.employeeId);
	}
}
