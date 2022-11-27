import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Employee, ReportView } from '@precise/interfaces';
import { ManagersService } from './managers.service';

@Controller('managers')
export class ManagersController {

	constructor(private managersService: ManagersService) {}

	@Get('/:managerId/subordinates')
	public getEmployeeManager(@Param('managerId', ParseIntPipe) managerId: number): Promise<Employee[]> {
		return this.managersService.getManagerSubordinates(managerId);
	}

	@Get('/:managerId/subordinates/reports')
	public getManagerSubordinatesReports(@Param('managerId', ParseIntPipe) managerId: number): Promise<ReportView[]> {
		return this.managersService.getManagerSubordinatesReports(managerId);
	}
}
