import { Module } from '@nestjs/common';
import { ManagersController } from './managers.controller';
import { ManagersService } from './managers.service';
import { EmployeesService } from '../employees/employees.service';

@Module({
	providers: [ManagersService, EmployeesService],
	controllers: [ManagersController]
})
export class ManagersModule {}
