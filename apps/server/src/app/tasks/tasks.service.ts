import { Injectable } from '@nestjs/common';
import { ITask, ICreateTask } from '@precise/interfaces';
import * as dayjs from 'dayjs';
import { db } from '../../db/db';

@Injectable()
export class TasksService {

	async createTask(task: ICreateTask): Promise<void> {
		const allTasks = await db.getData('/tasks');
		const lastTask = allTasks.at(-1);
		const id = (lastTask?.id || 0) + 1;

		const { text, dueDate: dd, employeeId, managerId } = task;
		const dueDate = dayjs(dd, 'MM/DD/YYYY').toDate();
		const newTask: ITask = { id, text, createdAt: new Date(), dueDate, employeeId, managerId };
		await db.push('/tasks/', [newTask], false);
	}
}
