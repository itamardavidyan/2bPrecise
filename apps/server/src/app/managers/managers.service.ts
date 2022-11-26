import { Injectable } from '@nestjs/common';
import { Employee, Report, ReportView } from '@precise/interfaces';
import { EmployeesService } from '../employees/employees.service';
import { db } from '../../db/db';

@Injectable()
export class ManagersService {

	constructor(private employeesService: EmployeesService) {}

	async getManagerSubordinates(managerId: number): Promise<Employee[]> {
		const allEmployees = await db.getData('/employees');
		return allEmployees.filter(employee => employee.managerId === managerId);
	}

	async getManagerSubordinatesReports(managerId: number): Promise<ReportView[]> {
		const allReports = await db.getData('/reports');
		const managerSubordinatesReports: Report[] = allReports.filter(report => report.managerId === managerId);
		return await Promise.all(managerSubordinatesReports.map(async ({ text, date, employeeId }) => { // JOIN
			const employee = await this.employeesService.getEmployeeDetails(employeeId);
			return { text, date, employee }
		}))
	}
}
