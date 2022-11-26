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
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateReportComponent } from './components/dialogs/create-report/create-report.component';
import { FormsModule } from '@angular/forms';
import { SubordinatesReportsComponent } from './components/subordinates-reports/subordinates-reports.component';
import { ManagerSubordinatesComponent } from './components/manager-subordinates/manager-subordinates.component';

@NgModule({
	declarations: [
		AppComponent,
		EmployeeListComponent,
		EmployeeDetailsComponent,
		ManagerDetailsComponent,
		CreateReportComponent,
		SubordinatesReportsComponent,
		ManagerSubordinatesComponent,
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
		MatFormFieldModule,
		BrowserAnimationsModule,
		FormsModule
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
