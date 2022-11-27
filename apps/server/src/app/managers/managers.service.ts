import { Injectable } from '@nestjs/common';
import { IEmployee, IReportView } from '@precise/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../../entities';

@Injectable()
export class ManagersService {

	constructor(@InjectRepository(Employee) private employeesRepository: Repository<Employee>) {}

	async getManagerSubordinates(managerId: number): Promise<IEmployee[]> {
		return await this.employeesRepository.find({ where: { manager: { id: managerId } } });
	}

	async getManagerSubordinatesReports(managerId: number): Promise<IReportView[]> {
		const { reports } = await this.employeesRepository.findOne({ where: { id: managerId }, relations: ['reports', 'reports.employee'] });
		return reports;
	}
}
