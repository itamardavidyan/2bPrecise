import { Employee } from './employee.interface';

interface ReportDetails {
	text: number,
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
