import { Injectable } from '@nestjs/common';
import { IEmployee, IReport, IReportView } from '@precise/interfaces';
import { EmployeesService } from '../employees/employees.service';
import { db } from '../../db/db';

@Injectable()
export class ManagersService {

	constructor(private employeesService: EmployeesService) {}

	async getManagerSubordinates(managerId: number): Promise<IEmployee[]> {
		const allEmployees = await db.getData('/employees');
		return allEmployees.filter(employee => employee.managerId === managerId);
	}

	async getManagerSubordinatesReports(managerId: number): Promise<IReportView[]> {
		const allReports = await db.getData('/reports');
		const managerSubordinatesReports: IReport[] = allReports.filter(report => report.managerId === managerId);
		return await Promise.all(managerSubordinatesReports.map(async ({ text, date, employeeId }) => { // JOIN
			const employee = await this.employeesService.getEmployeeDetails(employeeId);
			return { text, date, employee }
		}))
	}
}
