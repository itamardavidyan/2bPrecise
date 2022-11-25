import { Injectable } from '@nestjs/common';
import { db } from '../../db/db';

@Injectable()
export class EmployeesService {

	async getAllEmployees() {
		return await db.getData('/employees');
	}

	async getEmployeeDetails(employeeId: number) {
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
}
