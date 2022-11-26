import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmployeesModule } from './employees/employees.module';
import { ManagersModule } from './managers/managers.module';

@Module({
  imports: [EmployeesModule, ManagersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
