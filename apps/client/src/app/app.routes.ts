import { Route } from '@angular/router';
import { EmployeeListComponent } from './routes/employee-list/employee-list.component';

export const appRoutes: Route[] = [
	{
		path: '',
		component: EmployeeListComponent
	}
];
