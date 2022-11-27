import { Module } from '@nestjs/common';

import { EmployeesModule } from './employees/employees.module';
import { ManagersModule } from './managers/managers.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee, Report, Task } from '../entities';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'precise',
			password: '2bPassword',
			database: 'db',
			entities: [Employee, Report, Task],
			synchronize: true // WARNING - Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
		}),
		EmployeesModule,
		ManagersModule,
		TasksModule
	]
})
export class AppModule {}
