import { Injectable } from '@nestjs/common';
import { ICreateTask } from '@precise/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../entities';
import * as dayjs from 'dayjs';

@Injectable()
export class TasksService {

	constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) {}

	async createTask(task: ICreateTask): Promise<void> {
		const { text, dueDate: dd, employeeId, managerId } = task;
		const dueDate = dayjs(dd, 'MM/DD/YYYY').toDate();
		const newTask = { text, createdAt: new Date(), dueDate, employee: { id: employeeId }, manager: { id: managerId } };
		await this.tasksRepository.save(newTask);
	}
}
