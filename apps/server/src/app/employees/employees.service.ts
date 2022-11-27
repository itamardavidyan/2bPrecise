import { Injectable } from '@nestjs/common';
import { IEmployee, ITask } from '@precise/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee, Report } from '../../entities';

@Injectable()
export class EmployeesService {

	constructor(@InjectRepository(Employee) private employeesRepository: Repository<Employee>,
				@InjectRepository(Report) private reportsRepository: Repository<Report>) {}

	async getAllEmployees(): Promise<IEmployee[]> {
		return await this.employeesRepository.find();
	}

	async getEmployeeDetails(employeeId: number): Promise<IEmployee> {
		return await this.employeesRepository.findOne({ where: { id: employeeId } })
	}

	async getEmployeeManager(employeeId: number): Promise<IEmployee> {
		const employee = await this.employeesRepository.findOne({ where: { id: employeeId }, relations: { manager: true } });
		return employee.manager;
	}

	async createEmployeeReport(employeeId: number, reportText: string): Promise<void> {
		const { managerId } = await this.employeesRepository.findOne({ where: { id: employeeId } })

		const report = { manager: { id: managerId }, employee: { id: employeeId }, text: reportText, createdAt: new Date() };
		await this.reportsRepository.save(report);
	}

	async getEmployeeTasks(employeeId: number): Promise<ITask[]> {
		const { tasks } = await this.employeesRepository.findOne({ where: { id: employeeId }, relations: ['tasks'] });
		return tasks;
	}
}
