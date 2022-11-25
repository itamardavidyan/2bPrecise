import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { EmployeeListComponent } from './routes/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './routes/employee-details/employee-details.component';
import { ManagerDetailsComponent } from './components/manager-details/manager-details.component';

@NgModule({
	declarations: [
		AppComponent,
		EmployeeListComponent,
		EmployeeDetailsComponent,
		ManagerDetailsComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, {
			initialNavigation: 'enabledBlocking',
		}),
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
