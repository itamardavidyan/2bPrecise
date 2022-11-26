import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportView } from 'libs/interfaces/src';
import { Observable } from 'rxjs';
import { ManagersService } from '../../services/managers.service';

@Component({
	selector: 'subordinates-reports',
	templateUrl: './subordinates-reports.component.html',
	styleUrls: ['./subordinates-reports.component.css'],
})
export class SubordinatesReportsComponent {

	employeeId!: number;
	managerSubordinatesReports$!: Observable<ReportView[]>;

	constructor(private route: ActivatedRoute, private managersService: ManagersService) {}

	ngOnInit() {
		if (!this.route.snapshot.paramMap.has('employeeId')) return;

		this.employeeId = +(this.route.snapshot.paramMap.get('employeeId') as string);
		this.managerSubordinatesReports$ = this.managersService.getManagerSubordinatesReports(this.employeeId);
	}
}
