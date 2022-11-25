import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EmployeesService  } from './employees.service';

@Controller('employees')
export class EmployeesController {

	constructor(private employeesService: EmployeesService) {}

	@Get()
	public getAllEmployees(): Promise<any[]> {
		return this.employeesService.getAllEmployees();
	}

	@Get('/:employeeId/manager')
	public getEmployeeManager(@Param('employeeId', ParseIntPipe) employeeId: number): Promise<any> {
		return this.employeesService.getEmployeeManager(employeeId);
	}

	@Get('/:employeeId')
	public getEmployeeDetails(@Param('employeeId', ParseIntPipe) employeeId: number): Promise<any> {
		return this.employeesService.getEmployeeDetails(employeeId)
	}

	@Post('/:employeeId/report')
	public createEmployeeReport(@Param('employeeId', ParseIntPipe) employeeId: number, @Body('text') text: string): Promise<void> {
		return this.employeesService.createEmployeeReport(employeeId, text);
	}
}
