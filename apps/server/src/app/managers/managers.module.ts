import { Module } from '@nestjs/common';
import { ManagersController } from './managers.controller';
import { ManagersService } from './managers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../../entities';

@Module({
	imports: [TypeOrmModule.forFeature([Employee])],
	providers: [ManagersService],
	controllers: [ManagersController]
})
export class ManagersModule {}
