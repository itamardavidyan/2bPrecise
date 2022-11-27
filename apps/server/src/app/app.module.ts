import { Module } from '@nestjs/common';

import { EmployeesModule } from './employees/employees.module';
import { ManagersModule } from './managers/managers.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [EmployeesModule, ManagersModule, TasksModule]
})
export class AppModule {}
