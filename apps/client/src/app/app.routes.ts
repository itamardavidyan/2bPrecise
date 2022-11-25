import { Route } from '@angular/router';
import { EmployeeDetailsComponent } from './routes/employee-details/employee-details.component';
import { EmployeeListComponent } from './routes/employee-list/employee-list.component';

export const appRoutes: Route[] = [
	{
		path: '',
		component: EmployeeListComponent
	},
	{
		path: 'employee-details/:employeeId',
		component: EmployeeDetailsComponent
	}
];
