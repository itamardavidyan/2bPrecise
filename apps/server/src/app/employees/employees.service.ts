import { Injectable } from '@nestjs/common';
import { Employee, Report } from '@precise/interfaces';
import { db } from '../../db/db';

@Injectable()
export class EmployeesService {

	async getAllEmployees() {
		return await db.getData('/employees');
	}

	async getEmployeeDetails(employeeId: number): Promise<Employee> {
		const allEmployees = await db.getData('/employees');
		return allEmployees.find(employee => employee.id === employeeId);
	}

	async getEmployeeManager(employeeId: number) {
		const allEmployees = await db.getData('/employees');
		const employee = allEmployees.find(employee => employee.id === employeeId);
		if (!employee) return;

		const { managerId } = employee;
		if (!managerId) return;

		return allEmployees.find(employee => employee.id === managerId);;
	}

	async createEmployeeReport(employeeId: number, reportText: string) {
		const { managerId } = await this.getEmployeeDetails(employeeId);
		const allReports = await db.getData('/reports');
		const lastReport = allReports.at(-1);
		const id = (lastReport?.id || 0) + 1;

		const report: Report = { id, managerId, employeeId, text: reportText, date: new Date() };
		await db.push('/reports/', [report], false);
	}
}
