import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { EmployeeListComponent } from './routes/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './routes/employee-details/employee-details.component';
import { ManagerDetailsComponent } from './components/manager-details/manager-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateReportComponent } from './components/dialogs/create-report/create-report.component';
import { AssignTaskComponent } from './components/dialogs/assign-task/assign-task.component';
import { ManagerSubordinatesReportsComponent } from './components/manager-subordinates-reports/manager-subordinates-reports.component';
import { ManagerSubordinatesComponent } from './components/manager-subordinates/manager-subordinates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import { EmployeeTasksComponent } from './components/employee-tasks/employee-tasks.component';
dayjs.extend(utc);

@NgModule({
	declarations: [
		AppComponent,
		EmployeeListComponent,
		EmployeeDetailsComponent,
		ManagerDetailsComponent,
		CreateReportComponent,
		AssignTaskComponent,
		ManagerSubordinatesReportsComponent,
		ManagerSubordinatesComponent,
		EmployeeTasksComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, {
			initialNavigation: 'enabledBlocking',
		}),
		HttpClientModule,
		MatDialogModule,
		MatButtonModule,
		MatCommonModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [MatDatepickerModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
