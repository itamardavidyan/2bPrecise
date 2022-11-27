import { Body, Controller, Post } from '@nestjs/common';
import { CreateTask } from '@precise/interfaces';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

	constructor(private tasksService: TasksService) {}

	@Post('')
	public createTask(@Body() task: CreateTask): Promise<void> {
		return this.tasksService.createTask(task);
	}

}
