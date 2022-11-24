import { Injectable } from '@nestjs/common';
import { db } from '../../db/db';

@Injectable()
export class EmployeesService {

	async getAllEmployees() {
		return await db.getData('/employees');
	}
}
