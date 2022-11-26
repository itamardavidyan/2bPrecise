import { Employee } from './employee.interface';

interface ReportDetails {
	text: number,
	date: Date
}

export interface Report extends ReportDetails {
	employeeId: number,
	managerId: number
}

export interface ReportView extends ReportDetails {
	employee: Employee;
}
