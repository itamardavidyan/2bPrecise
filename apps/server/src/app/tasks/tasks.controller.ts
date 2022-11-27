import { Body, Controller, Post } from '@nestjs/common';
import { ICreateTask } from '@precise/interfaces';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

	constructor(private tasksService: TasksService) {}

	@Post('')
	public createTask(@Body() task: ICreateTask): Promise<void> {
		return this.tasksService.createTask(task);
	}

}
