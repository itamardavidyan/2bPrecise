import { Employee } from './employee.interface';

interface ReportDetails {
	text: string,
	date: Date
}

export interface Report extends ReportDetails {
	id: number,
	employeeId: number,
	managerId: number
}

export interface ReportView extends ReportDetails {
	employee: Employee;
}
