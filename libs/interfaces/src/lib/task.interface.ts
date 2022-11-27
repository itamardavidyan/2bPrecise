export interface Task {
	id: number,
	text: string,
	createdAt: Date,
	dueDate: Date,
	employeeId: number,
	managerId: number
}

export interface CreateTask {
	text: string,
	dueDate: string,
	employeeId: number,
	managerId: number
}
