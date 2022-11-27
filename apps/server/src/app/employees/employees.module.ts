import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee, Report } from '../../entities';

@Module({
	imports: [TypeOrmModule.forFeature([Employee, Report])],
	providers: [EmployeesService],
	controllers: [EmployeesController]
})
export class EmployeesModule {}
