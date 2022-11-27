import { IEmployee } from './employee.interface';

interface IReportDetails {
	text: string,
	createdAt: Date
}

export interface IReport extends IReportDetails {
	id: number,
	employeeId: number,
	managerId: number
}

export interface IReportView extends IReportDetails {
	employee: IEmployee;
}
