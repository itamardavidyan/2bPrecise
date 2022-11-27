export interface ITask {
	id: number,
	text: string,
	createdAt: Date,
	dueDate: Date,
	employeeId: number,
	managerId: number
}

export interface ICreateTask {
	text: string,
	dueDate: string,
	employeeId: number,
	managerId: number
}
